const { Pool } = require('pg');

const pool = new Pool({
    user: 'gadoevalex',
    host: 'localhost',
    database: 'sela',
    password: '',
    port: 5432,
});

async function getThingByVendorCode(request, response) {
    const vendorCode = request.params.vendor_code.toString();
    let thing = await pool.query('SELECT * FROM things WHERE vendor_code = $1', [vendorCode]);
    [thing] = thing.rows;
    const thingsInCapsule = await pool.query('SELECT * FROM things WHERE id_capsule = $1', [thing.id_capsule]);
    thing.capsule = thingsInCapsule.rows;
    const sizes = await pool.query('SELECT * FROM thing_sizes WHERE id_thing = $1', [thing.id])
    thing.sizes = sizes.rows;
    response.status(200).json(thing);
}

module.exports = {
    getThingByVendorCode,
};
