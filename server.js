const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const ip = require('ip');
const db = require('./queries.js');
require('dotenv').config();
const io = require('socket.io')(server);
const sockets = require('./app/constants/sockets');

const PORT = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

app.get('/thing/:vendor_code', db.getThingByVendorCode);

const consultants = io.of(sockets.CONSULTANTS);


const rooms = io.of(sockets.ROOMS);

consultants.on('connection', (socket) => {
  console.log(`Consultant connection ${socket.handshake.address}`);

  socket.on('disconnect', () => console.log(`Consultant ${socket.handshake.address} disconnected`));
});

rooms.on('connection', (socket) => {
  console.log(`Room connection ${socket.handshake.address}`);

  socket.on(sockets.CALL_CONSULTANT, (room) => { // слушаем событие
    // console.log(`нужен консультант в комнату ${room}`);
    consultants.emit(sockets.CALL_CONSULTANT, room); // отправляем на все устройства консультанта
  });

  socket.on(sockets.BRING_THING, (data) => {
    // console.log(`Принести вещь в комнату ${data[0]}`);
    consultants.emit(sockets.BRING_THING, (data));
  });

  socket.on('disconnect', () => console.log(`Room ${socket.handshake.address} disconnected`));
});

server.listen(PORT, () => console.log(`Listening on ${ip.address()}:${PORT}`));
