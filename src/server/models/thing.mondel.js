const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const thingSchema = new Schema({
    price: Number,
    title: String,
    color: String,
    vendor_code: String,
    id: Number,
    id_capsule: Number,
    image_url: String,
    image_count: Number,
    bar_code: String,
    siz: String,
    brand: String, 
    amount: Number,
}, {
    timestamps: true,
});

const Thing  = mongoose.model("Thing", thingSchema);

module.exports = Thing;