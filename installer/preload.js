'use strict';
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('setup', {
  minimize:    ()           => ipcRenderer.send('minimize'),
  close:       ()           => ipcRenderer.send('close'),
  getInfo:     ()           => ipcRenderer.invoke('get-info'),
  chooseDir:   (p)          => ipcRenderer.invoke('choose-dir', p),
  install:     (opts)       => ipcRenderer.invoke('install', opts),
  onProgress:  (cb)         => ipcRenderer.on('install-progress', (_, d) => cb(d)),
  launchApp:   (exePath)    => ipcRenderer.invoke('launch-app', exePath),
});
