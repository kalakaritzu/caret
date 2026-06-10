'use strict';
const { app, BrowserWindow, ipcMain, dialog, shell } = require('electron');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { execFile, execFileSync } = require('child_process');

let win;

app.whenReady().then(() => {
  win = new BrowserWindow({
    width: 620,
    height: 420,
    resizable: false,
    frame: false,
    center: true,
    show: false,
    backgroundColor: '#161616',
    icon: path.join(__dirname, '..', 'assets', 'icon.ico'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });
  win.loadFile(path.join(__dirname, 'src', 'index.html'));
  win.once('ready-to-show', () => win.show());
});

app.on('window-all-closed', () => app.quit());

ipcMain.on('minimize', () => win?.minimize());
ipcMain.on('close', () => app.quit());

ipcMain.handle('get-info', () => ({
  version: '1.0.0',
  resourcesPath: process.resourcesPath,
  defaultUserPath: path.join(os.homedir(), 'AppData', 'Local', 'Caret'),
  defaultAllPath: 'C:\\Program Files\\Caret',
}));

ipcMain.handle('choose-dir', async (_, defaultPath) => {
  const result = await dialog.showOpenDialog(win, {
    defaultPath,
    properties: ['openDirectory', 'createDirectory'],
  });
  return result.canceled ? null : result.filePaths[0];
});

ipcMain.handle('install', async (event, { installPath, desktop, startMenu }) => {
  const zipPath = path.join(process.resourcesPath, 'app.zip');

  const send = (step, percent) => {
    event.sender.send('install-progress', { step, percent });
  };

  try {
    send('Creating directory...', 5);
    fs.mkdirSync(installPath, { recursive: true });

    send('Extracting files...', 15);
    execFileSync('powershell.exe', [
      '-NoProfile', '-NonInteractive', '-Command',
      `Expand-Archive -Path "${zipPath}" -DestinationPath "${installPath}" -Force`,
    ]);

    const exePath = path.join(installPath, 'Caret.exe');

    if (desktop) {
      send('Creating desktop shortcut...', 75);
      const desktopDir = path.join(os.homedir(), 'Desktop');
      createShortcut(exePath, path.join(desktopDir, 'Caret.lnk'), installPath);
    }

    if (startMenu) {
      send('Adding to Start Menu...', 88);
      const startDir = path.join(os.homedir(), 'AppData', 'Roaming', 'Microsoft', 'Windows', 'Start Menu', 'Programs');
      fs.mkdirSync(path.join(startDir, 'Caret'), { recursive: true });
      createShortcut(exePath, path.join(startDir, 'Caret', 'Caret.lnk'), installPath);
    }

    send('Done', 100);
    return { success: true, exePath };
  } catch (err) {
    return { success: false, error: err.message };
  }
});

function createShortcut(target, lnkPath, workDir) {
  const script = `
    $s = New-Object -ComObject WScript.Shell
    $l = $s.CreateShortcut('${lnkPath.replace(/'/g, "''")}')
    $l.TargetPath = '${target.replace(/'/g, "''")}'
    $l.WorkingDirectory = '${workDir.replace(/'/g, "''")}'
    $l.IconLocation = '${target.replace(/'/g, "''")},0'
    $l.Save()
  `.trim();
  execFileSync('powershell.exe', ['-NoProfile', '-NonInteractive', '-Command', script]);
}

ipcMain.handle('launch-app', (_, exePath) => {
  shell.openPath(exePath);
  setTimeout(() => app.quit(), 500);
});
