import { app, BrowserWindow, globalShortcut } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import routes from './constants/routes';

const { clipboard } = require('electron')
require('dotenv').config();

const SerialPort = require('serialport');

const serialPortName = process.env.SERIAL_PORT;

export default class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow = null;

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

if (
  process.env.NODE_ENV === 'development'
  || process.env.DEBUG_PROD === 'true'
) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

  return Promise.all(
    extensions.map(name => installer.default(installer[name], forceDownload))
  ).catch(console.log);
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// ввод barcode через ctrl V
app.on('ready', () => {
  globalShortcut.register('CommandOrControl+V', () => {
    const barcode = clipboard.readText();
    console.log(barcode);
    mainWindow.webContents.send('vendorCode', barcode);
  });
});

app.on('ready', async () => {
  const serialPort = new SerialPort(serialPortName, {
    baudRate: 9600, // бит в секунду
    dataBits: 8, // биты данных
    parity: 'none', // четность
    stopBits: 1, // стоповые
  });

  if (
    process.env.NODE_ENV === 'development'
    || process.env.DEBUG_PROD === 'true'
  ) {
    await installExtensions();
  }

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728
  });

  mainWindow.setFullScreen(true);

  mainWindow.loadURL(`file://${__dirname}/app.html#${routes.EXPECTATION}`);

  mainWindow.webContents.on('did-finish-load', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
      mainWindow.focus();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // serialPort.on('open', () => {
  //   console.log(`Scanner: Open serial port ${serialPortName}`);
  //   serialPort.on('data', (data) => {
  //     const msg = data.toString('utf8').substr(0, Math.max(0, data.length - 1));
  //     if (msg && msg.length > 0) {
  //       console.log(`Scanner: vendor_code is ${msg}`);
  //       mainWindow.webContents.send('vendorCode', msg);
  //     } else {
  //       console.log('Scanner: vendor_code is empty');
  //     }
  //   });
  // });

  new AppUpdater();
});
