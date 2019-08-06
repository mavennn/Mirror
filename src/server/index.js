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
app.get('/sizes/:id', db.getSizesById);
app.get('/capsule/:id_capsule', db.getRecommendationByCapsuleId)

app.listen(PORT, () => console.log(`Listening on ${ip.address()}:${PORT}`));

/* лица

комната     могут храниться в массиве [room1, room2, room3, ... , roomN]
 - номер комнаты

консультант  
 - занят / не занят

    var consultants = [id1, id2, id3, id4 ]


заяки 
 type: call / bring / take to
*/


/* действия 
callConsultant(room);
 - isFreeConsultants() 

bringThing(room, thing);

takeToCashier(room, thing[]);
*/