require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

require("./config/db");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configurar EJS
app.set(
    "view engine",
    "ejs"
);

app.set(
    "views",
    path.join(
        __dirname,
        "frontend/views"
    )
);

// Rutas API
const productosRoutes =
    require("./routes/productos.routes");

// Rutas web
const webRoutes =
    require("./frontend/routes/webRoutes");

// Frontend
app.use(
    "/api/v1",
    webRoutes
);

// API
app.use(
    "/productos",
    productosRoutes
);

// Home opcional
app.get("/", (req, res) => {
    res.redirect("/api/v1");
});

const PORT =
    process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(
        `Servidor en puerto ${PORT}`
    );
});