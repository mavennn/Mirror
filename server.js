const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const ip = require('ip');
const db = require('./queries.js');
require('dotenv').config();
const io = require('socket.io')(server);

const PORT = process.env.SERVER_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

app.get('/thing/:vendor_code', db.getThingByVendorCode);

const constultants = io.of('consultants');


const mirrors = io.of('mirrors');

constultants.on('connection', (socket) => {
    console.log(`Consultant connection ${socket.handshake.address}`);

    socket.on('getConsultant', (data) => console.log(data));
})


mirrors.on('connection', (socket) => {
    console.log(`Room connection ${socket.handshake.address}`)

    socket.on('getConsultant', (room) => {
        console.log(`нужен консультант в комнату ${room}`);
        constultants.emit('getConsultant', room);
    })

    socket.on('disconnect', () => console.log('клиент отключился'));
})

server.listen(PORT, () => console.log(`Listening on ${ip.address()}:${PORT}`));
