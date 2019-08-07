const express = require('express');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const ip = require('ip');
const db = require('./queries.js');
// const io = require('socket.io')(ap);

const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('dist'));

app.get('/thing/:vendor_code', db.getThingByVendorCode);

app.listen(PORT, () => console.log(`Listening on ${ip.address()}:${PORT}`));
