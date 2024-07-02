const {contextBridge, ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    saveNote: (note) => {
        ipcRenderer.send('save-note', note)
    },

    deleteNote: (note) => {
        ipcRenderer.send('delete-note', note.target.textContent)
    }

    
})
