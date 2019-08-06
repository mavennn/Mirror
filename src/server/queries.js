const Pool = require('pg').Pool
const pool = new Pool({
	user: 'gadoevalex',
	host: 'localhost',
	database: 'sela',
	password: '',
	port: 5432,
})

const getThingByVendorCode = (request, response) => {
    const vendor_code = request.params.vendor_code.toString();
    pool.query('SELECT * FROM things WHERE vendor_code = $1', [vendor_code], (err, thing) => {
        if (err) throw err;
        // console.log(thing.rows)
        response.status(200).json(thing.rows[0])
    });
};

const getSizesById = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query('SELECT * FROM thing_sizes WHERE id_thing = $1', [id], (err, sizes) => {
        if (err) throw err;
        var thing_sizes = [];
        sizes.rows.forEach(i => thing_sizes.push(i.title));
        response.status(200).json(thing_sizes)
    });
}

const getRecommendationByCapsuleId = (request, response) => {
    const id_capsule = parseInt(request.params.id_capsule);
    pool.query('SELECT * FROM things WHERE id_capsule = $1', [id_capsule], (err, things) => {
        if (err) throw err;
        response.status(200).json(things.rows)
    })
}

module.exports = {
    getThingByVendorCode,
    getSizesById,
    getRecommendationByCapsuleId,
}