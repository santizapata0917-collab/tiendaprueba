const express = require("express");
const router = express.Router();

const Producto = require("../models/producto.model");

// CREATE
router.post("/", async (req, res) => {
    try {
        const producto = new Producto(req.body);
        await producto.save();
        res.json(producto);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// READ ALL
router.get("/", async (req, res) => {
    try {
        const productos = await Producto.find();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
});

// READ BY ID
router.get("/:id", async (req, res) => {
    try {
        const producto = await Producto.findById(req.params.id);

        if (!producto) {
            return res.status(404).json({
                mensaje: "Producto no encontrado"
            });
        }

        res.json(producto);

    } catch (error) {
        res.status(400).json({
            mensaje: "ID inválido",
            error: error.message
        });
    }
});

// UPDATE
router.put("/:id", async (req, res) => {
    try {
        const productoActualizado =
            await Producto.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

        res.json(productoActualizado);

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
});

// DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Producto.findByIdAndDelete(req.params.id);

        res.json({
            mensaje: "Producto eliminado"
        });

    } catch (error) {
        res.status(500).json({
            mensaje: error.message
        });
    }
});

module.exports = router;