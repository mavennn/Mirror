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
const _ = require('lodash');

const PORT = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

app.get('/thing/:barcode', db.getThingByBarcode);
app.get('/recs/:groupId', db.getRecs);

const queries = [];

const consultants = io.of(sockets.CONSULTANTS);

const rooms = io.of(sockets.ROOMS);

consultants.on('connection', (consultant) => {
  console.log(`Consultant ${consultant.handshake.address}`);

  consultant.on('giveMeQueries', () => {
    consultant.emit('giveYouQueries', queries);
  });

  consultant.on('takeInWork', (query) => {
    const index = _.findIndex(queries, query);
    queries[index].inProcessing = true;
    consultants.emit('getQueries', queries);
  });

  consultant.on('completed', (query) => {
    const index = _.findIndex(queries, query);
    queries.splice(index, 1);
    consultants.emit('getQueries', queries);
  });

  consultants.on('disconnect', () => console.log(`Consultant ${consultant.handshake.address} disconnected`));
});

rooms.on('connection', (room) => {
  console.log(`Room ${room.handshake.address}`);

  room.on('getConsultant', (query) => {
    if (_.find(queries, query) === undefined) {
      queries.push(query);
      console.log(query);
      consultants.emit('getQueries', queries);
    }
  });

  room.on('disconnect', () => console.log(`Room ${room.handshake.address} disconnected`));
});

server.listen(PORT, () => console.log(`Listening on ${ip.address()}:${PORT}`));
