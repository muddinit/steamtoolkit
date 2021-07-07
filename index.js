const { app, BrowserWindow } = require('electron')

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
	  contextIsolation : false
    }
  })

  // and load the index.html of the app.
  win.removeMenu()
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)