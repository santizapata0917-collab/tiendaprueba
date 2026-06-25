const express = require("express");

const router = express.Router();

const {listarProductos} = require("../controllers/apiController"
);

router.get("/", (req, res) => {

    res.render("index");

});

router.get("/productos",listarProductos);

module.exports = router;