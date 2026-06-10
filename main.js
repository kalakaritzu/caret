'use strict';
const { app, BrowserWindow, Menu, dialog, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

let pty;
try { pty = require('node-pty'); } catch (e) { console.error('node-pty unavailable:', e.message); }

let mainWindow;
let allowClose = false;

const termProcesses = new Map();
let termCounter = 0;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 600,
    minHeight: 400,
    backgroundColor: '#1e1e1e',
    show: false,
    frame: false,
    icon: path.join(__dirname, 'assets', 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  Menu.setApplicationMenu(null);

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));

  mainWindow.on('maximize',   () => mainWindow.webContents.send('maximize-change', true));
  mainWindow.on('unmaximize', () => mainWindow.webContents.send('maximize-change', false));

  mainWindow.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F12' || (input.control && input.shift && input.key === 'I')) {
      mainWindow.webContents.openDevTools();
    }
  });

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
    if (args.length > 0) {
      args.forEach(filePath => {
        try {
          const resolved = path.resolve(filePath);
          const content = fs.readFileSync(resolved, 'utf-8');
          mainWindow.webContents.send('file-opened', { filePath: resolved, content });
        } catch (e) { /* ignore bad paths */ }
      });
    }
  });

  mainWindow.on('close', (e) => {
    if (allowClose) return;
    e.preventDefault();
    mainWindow.webContents.send('window-closing');
  });
}

ipcMain.handle('save-file', (event, { filePath, content }) => {
  fs.writeFileSync(filePath, content, 'utf-8');
  return true;
});

ipcMain.handle('save-file-as', async (event, { defaultPath, content }) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath,
    filters: [{ name: 'All Files', extensions: ['*'] }],
  });
  if (!result.canceled) {
    fs.writeFileSync(result.filePath, content, 'utf-8');
    return result.filePath;
  }
  return null;
});

ipcMain.handle('read-file', (event, filePath) => {
  return fs.readFileSync(filePath, 'utf-8');
});

ipcMain.handle('open-file-dialog', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openFile', 'multiSelections'],
    filters: [
      { name: 'All Supported', extensions: ['txt','md','log','js','mjs','ts','jsx','tsx','html','htm','css','scss','less','json','xml','yaml','yml','csv','py','rb','go','rs','c','cpp','cc','h','hpp','java','cs','kt','kts','php','sh','bash','sql','lua','swift','dart','r','pl','pm','groovy','gradle','hs','lhs','ps1','psm1','toml','diff','patch','vb','vbs','properties','env','ini','coffee','jl','erl','hrl','clj','cljs','nginx'] },
      { name: 'Text',          extensions: ['txt', 'md', 'log'] },
      { name: 'Web',           extensions: ['html', 'htm', 'css', 'scss', 'less', 'js', 'mjs', 'ts', 'jsx', 'tsx'] },
      { name: 'Data',          extensions: ['json', 'xml', 'yaml', 'yml', 'csv', 'toml', 'properties', 'env', 'ini'] },
      { name: 'Code',          extensions: ['py', 'rb', 'go', 'rs', 'c', 'cpp', 'cc', 'h', 'hpp', 'java', 'cs', 'kt', 'kts', 'php', 'sh', 'bash', 'sql', 'lua', 'swift', 'dart', 'r', 'pl', 'pm', 'groovy', 'gradle', 'hs', 'lhs', 'ps1', 'psm1', 'coffee', 'jl', 'erl', 'hrl', 'clj', 'cljs'] },
      { name: 'All Files',     extensions: ['*'] },
    ],
  });
  if (result.canceled) return [];
  return result.filePaths.map(fp => {
    try { return { filePath: fp, content: fs.readFileSync(fp, 'utf-8') }; }
    catch { return null; }
  }).filter(Boolean);
});

ipcMain.handle('open-folder-dialog', async () => {
  const result = await dialog.showOpenDialog(mainWindow, {
    properties: ['openDirectory'],
  });
  if (result.canceled || !result.filePaths.length) return null;
  return result.filePaths[0];
});

ipcMain.handle('read-dir', (event, dirPath) => {
  try {
    const entries = fs.readdirSync(dirPath, { withFileTypes: true });
    return entries
      .map(e => ({ name: e.name, isDir: e.isDirectory() }))
      .sort((a, b) => {
        if (a.isDir !== b.isDir) return a.isDir ? -1 : 1;
        return a.name.localeCompare(b.name, undefined, { sensitivity: 'base' });
      });
  } catch { return []; }
});

ipcMain.handle('fs-create-file', (event, filePath) => {
  fs.writeFileSync(filePath, '', 'utf-8');
  return true;
});

ipcMain.handle('fs-create-dir', (event, dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true });
  return true;
});

ipcMain.handle('fs-rename', (event, oldPath, newPath) => {
  fs.renameSync(oldPath, newPath);
  return true;
});

ipcMain.handle('fs-delete', (event, filePath) => {
  const st = fs.statSync(filePath);
  if (st.isDirectory()) fs.rmSync(filePath, { recursive: true });
  else fs.unlinkSync(filePath);
  return true;
});

ipcMain.on('minimize-window', () => {
  if (mainWindow) mainWindow.minimize();
});

ipcMain.on('maximize-window', () => {
  if (!mainWindow) return;
  mainWindow.isMaximized() ? mainWindow.unmaximize() : mainWindow.maximize();
});


ipcMain.on('set-title', (event, title) => {
  if (mainWindow) mainWindow.setTitle(title);
});

function killAllPtys() {
  termProcesses.forEach((proc, id) => {
    try { proc.kill(); } catch {}
  });
  termProcesses.clear();
}

ipcMain.on('close-app', () => {
  killAllPtys();
  allowClose = true;
  if (mainWindow) mainWindow.close();
});

app.on('before-quit', killAllPtys);

ipcMain.handle('terminal:create', (event, { rows, cols, cwd }) => {
  if (!pty) return { error: 'node-pty not available' };
  const termId = ++termCounter;
  const shell = 'powershell.exe';
  const proc = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: cols || 80,
    rows: rows || 24,
    cwd: cwd || process.env.USERPROFILE || process.cwd(),
    env: process.env,
  });
  termProcesses.set(termId, proc);
  proc.onData(data => {
    if (mainWindow && !mainWindow.isDestroyed())
      mainWindow.webContents.send('terminal:data', { termId, data });
  });
  proc.onExit(() => {
    termProcesses.delete(termId);
    if (mainWindow && !mainWindow.isDestroyed())
      mainWindow.webContents.send('terminal:exit', { termId });
  });
  return termId;
});

ipcMain.handle('terminal:input', (event, termId, data) => {
  termProcesses.get(termId)?.write(data);
});

ipcMain.handle('terminal:resize', (event, termId, cols, rows) => {
  const proc = termProcesses.get(termId);
  if (proc) { try { proc.resize(cols, rows); } catch {} }
});

ipcMain.handle('terminal:destroy', (event, termId) => {
  const proc = termProcesses.get(termId);
  if (proc) { try { proc.kill(); } catch {} termProcesses.delete(termId); }
});


app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
