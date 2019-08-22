const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const ip = require('ip');
const db = require('./queries.js');
const io = require('socket.io')(server);
require('dotenv').config();
const sockets = require('./app/constants/sockets');

const PORT = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

app.get('/thing/:vendor_code', db.getThingByVendorCode);

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = Math.random() * 16 | 0; const
      v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function add(array, value) {
  console.log(array.indexOf(value))
  if (array.indexOf(value) === -1) {
    array.push(value);
    console.log('добавлено');
  }
}

const queries = [];

const consultants = io.of(sockets.CONSULTANTS);

const rooms = io.of(sockets.ROOMS);

consultants.on('connection', (consultant) => {
  console.log(`Consultant ${consultant.handshake.address}`);

  consultant.on('disconnect', () => console.log(`Consultant ${consultant.handshake.address} disconnected`));
});

rooms.on('connection', (room) => {
  console.log(`Room ${room.handshake.address}`);

  room.on('getConsultant', (query) => {
    add(queries, query);
    console.log(queries);
  });

  //
  // room.on(sockets.CALL_CONSULTANT, (roomNumber) => { // слушаем событие
  //   // console.log(`нужен консультант в комнату ${room}`);
  //   consultants.emit(sockets.CALL_CONSULTANT, roomNumber); // отправляем на все устройства консультанта
  // });
  //
  // room.on(sockets.BRING_THING, (data) => {
  //   console.log(`Принести вещь в комнату ${data[0]}`);
  //   consultants.emit(sockets.BRING_THING, (data));
  // });

  room.on('disconnect', () => console.log(`Room ${room.handshake.address} disconnected`));
});

server.listen(PORT, () => console.log(`Listening on ${ip.address()}:${PORT}`));
