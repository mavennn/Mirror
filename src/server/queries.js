const { Pool } = require('pg');

const pool = new Pool({
  user: 'gadoevalex',
  host: 'localhost',
  database: 'sela',
  password: '',
  port: 5432,
});

const getThingByVendorCode = (request, response) => {
  const vendorCode = request.params.vendor_code.toString();
  pool.query('SELECT * FROM things WHERE vendor_code = $1', [vendorCode], (err, thing) => {
    if (err) throw err;
    console.log(thing.rows);
    response.status(200).json(thing.rows[0]);
  });
};

const getSizesById = (request, response) => {
  const id = parseInt(request.params.id, 10);
  pool.query('SELECT * FROM thing_sizes WHERE id_thing = $1', [id], (err, sizes) => {
    if (err) throw err;
    const thingSizes = [];
    sizes.rows.forEach(i => thingSizes.push(i.title));
    response.status(200).json(thingSizes);
  });
};

const getRecommendationByCapsuleId = (request, response) => {
  const idCapsule = parseInt(request.params.id_capsule, 10);
  pool.query('SELECT * FROM things WHERE id_capsule = $1', [idCapsule], (err, things) => {
    if (err) throw err;
    response.status(200).json(things.rows);
  });
};

module.exports = {
  getThingByVendorCode,
  getSizesById,
  getRecommendationByCapsuleId,
};
