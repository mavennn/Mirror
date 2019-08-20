const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const ip = require('ip');
const db = require('./queries.js');
const io = require('socket.io')(server);
require('dotenv').config();
const sockets = require('./app/constants/sockets')

const PORT = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

app.get('/thing/:vendor_code', db.getThingByVendorCode);

let queries = [];

const consultants = io.of(sockets.CONSULTANTS);

const rooms = io.of(sockets.ROOMS);

consultants.on('connection', (consultant) => {
  console.log(`Consultant ${consultant.handshake.address}`);

  consultant.on('disconnect', () => console.log(`Consultant ${consultant.handshake.address} disconnected`));
});

rooms.on('connection', (room) => {
  console.log(`Room ${room.handshake.address}`);

  room.on('getConsultant', (query) => {
    if (!queries.includes(query)) {
      queries.push(query);
      consultants.emit('getConsultant', queries);
    }
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
