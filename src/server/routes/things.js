const router = require("express").Router();
let Thing = require("../models/thing.mondel");

router.route("/:id").get((req, res) => {
    const bar_code = req.params.id;
    Thing.findOne({"bar_code": bar_code}, function (err, thing) {
        Thing.find({"vendor_code":thing.vendor_code}, (err, arr) => {
            res.send(arr);
        });
    });    
})

module.exports = router;