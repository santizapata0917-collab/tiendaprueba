require("dotenv").config();

const express = require("express");
const app = express();

require("./config/db");

app.use(express.json());

// Importar rutas
const productosRoutes = require("./routes/productos.routes");

// HOME
app.get("/", (req, res) => {
    res.send("Servidor funcionando");
});

// Usar rutas
app.use("/productos", productosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor en puerto " + PORT);
});