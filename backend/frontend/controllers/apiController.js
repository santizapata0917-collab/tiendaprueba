const axios = require("axios");
require("dotenv").config();

const listarProductos = async (req, res) => {

    try {

        console.log("BACKEND_URL:", process.env.BACKEND_URL);
        console.log("API_KEY:", process.env.API_KEY);

        const respuesta = await axios.get(
    `${req.protocol}://${req.get("host")}/api/productos`,
    {
        headers: {
            "x-api-key": process.env.API_KEY
        }
    }
);

        res.render("productos", {
            productos: respuesta.data
        });

    } catch (error) {

        console.log("ERROR COMPLETO:");
        console.log(error.response?.data);
        console.log(error.message);

        res.send(error.message);

    }

};

module.exports = {
    listarProductos
};