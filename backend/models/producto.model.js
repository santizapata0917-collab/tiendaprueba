const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({

    consecutivo: {
    type: Number,
    required: [true, "El consecutivo es obligatorio"],
    unique: true,
    min: [1, "El consecutivo debe ser mayor a 0"]
    },

    nombre: {
    type: String,
    required: [true, "El nombre es obligatorio"],
    trim: true,
    minlength: [3, "El nombre debe tener al menos 3 caracteres"],
    maxlength: [100, "El nombre no puede superar 100 caracteres"]
    },

    precio: {
    type: Number,
    required: [true, "El precio es obligatorio"],
    min: [0, "El precio no puede ser negativo"]
    },

    stock: {
    type: Number,
    required: [true, "El stock es obligatorio"],
    min: [1, "El stock mínimo es 1"]
    }

});

module.exports = mongoose.model("Producto", productoSchema);