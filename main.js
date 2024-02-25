const { app, BrowserView, BrowserWindow, Menu } = require("electron");
const path = require("path");

const template = [
  {
    label: "File",
    submenu: [
      {
        label: "Exit",
        accelerator: "CmdOrCtrl+Q",
        click: () => {
          app.quit();
        },
      },
    ],
  },
  {
    label: "Edit",
    submenu: [
      {
        label: "Cut",
        role: "cut",
      },
      {
        label: "Copy",
        role: "copy",
      },
      {
        label: "Paste",
        role: "paste",
      },
    ],
  },
  {
    label: "Settings",
    submenu: [
      {
        label: "Open Settings",
        click: () => {
          // Add code to open settings window or perform settings-related action
          console.log("Opening Settings...");
        },
      },
    ],
  },
];

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 });

  const view = new BrowserView();
  win.setBrowserView(view);
  view.setBounds({ x: 0, y: 0, width: 800, height: 600 });
  file:///home/asd/Desktop/demo/zz/renderer/address-bar.html
  // view.webContents.loadURL('https://facebook.com')

  // Load the address-bar.html file from the renderer folder
  view.webContents.loadFile(
    path.join(__dirname, "renderer", "address-bar.html")
  );

  // Open DevTools for the BrowserView
  view.webContents.openDevTools();

  // const menu = Menu.buildFromTemplate(template);
  // Menu.setApplicationMenu(menu);

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
