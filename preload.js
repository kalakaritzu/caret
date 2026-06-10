'use strict';
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  saveFile:        (opts) => ipcRenderer.invoke('save-file', opts),
  saveFileAs:      (opts) => ipcRenderer.invoke('save-file-as', opts),
  readFile:        (fp)   => ipcRenderer.invoke('read-file', fp),
  openFileDialog:  ()     => ipcRenderer.invoke('open-file-dialog'),
  openFolderDialog: ()        => ipcRenderer.invoke('open-folder-dialog'),
  readDir:          (dirPath) => ipcRenderer.invoke('read-dir', dirPath),
  fsCreateFile: (fp)       => ipcRenderer.invoke('fs-create-file', fp),
  fsCreateDir:  (dp)       => ipcRenderer.invoke('fs-create-dir', dp),
  fsRename:     (op, np)   => ipcRenderer.invoke('fs-rename', op, np),
  fsDelete:     (fp)       => ipcRenderer.invoke('fs-delete', fp),
  setTitle:        (t)    => ipcRenderer.send('set-title', t),
  closeApp:        ()     => ipcRenderer.send('close-app'),
  minimizeWindow:  ()     => ipcRenderer.send('minimize-window'),
  maximizeWindow:  ()     => ipcRenderer.send('maximize-window'),
  onMaximizeChange: (cb) => ipcRenderer.on('maximize-change', (_, isMax) => cb(isMax)),

  onFileOpened: (cb) => {
    ipcRenderer.removeAllListeners('file-opened');
    ipcRenderer.on('file-opened', (_, data) => cb(data));
  },
  onWindowClosing: (cb) => {
    ipcRenderer.removeAllListeners('window-closing');
    ipcRenderer.on('window-closing', () => cb());
  },

  createTerminal:  (opts)           => ipcRenderer.invoke('terminal:create', opts),
  terminalInput:   (id, data)       => ipcRenderer.invoke('terminal:input', id, data),
  terminalResize:  (id, cols, rows) => ipcRenderer.invoke('terminal:resize', id, cols, rows),
  destroyTerminal: (id)             => ipcRenderer.invoke('terminal:destroy', id),
  onTerminalData:  (cb) => ipcRenderer.on('terminal:data', (_, p) => cb(p)),
  onTerminalExit:  (cb) => ipcRenderer.on('terminal:exit', (_, p) => cb(p)),

  onUpdateAvailable: (cb) => ipcRenderer.on('update-available', (_, info) => cb(info)),
  openExternal: (url) => ipcRenderer.send('open-external', url),

});
