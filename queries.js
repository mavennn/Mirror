const { Pool } = require('pg');
require('dotenv').config();

const user = process.env.DATABASE_USER;
const host = process.env.DATABASE_HOST;
const database = process.env.DATABASE_DATABASE;
const password = process.env.DATABASE_PASSWORD;
const port = process.env.DATABASE_PORT;

const pool = new Pool({
  user, host, database, password, port
});

async function getThingByBarcode(request, response) {
  const barcode = request.params.barcode.toString();
  let thing = await pool.query('SELECT * FROM offers WHERE $1 = any(barcodes)', [barcode]);
  [thing] = thing.rows;
  console.log(thing);
  response.status(200).json(thing);
}

async function getRecs(request, response) {
  const groupId = request.params.groupId.toString();
  let Recs = await pool.query('SELECT * FROM offers WHERE group_id = $1', [groupId]);
  [Recs] = Recs.rows;
  const result = {
    pictures: Recs.pictures[0],
    id: Recs.id,
    barcode: Recs.barcodes[0],
    model: Recs.model
  };
  response.status(200).json(result);
}

module.exports = {
  getThingByBarcode,
  getRecs
};
