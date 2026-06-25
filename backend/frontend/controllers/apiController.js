const axios = require("axios");
require("dotenv").config();

const listarProductos = async (req, res) => {

    try {

        console.log("API_KEY:", process.env.API_KEY);

        const url =
            `${req.protocol}://${req.get("host")}/api/productos`;

        console.log("URL:", url);

        const respuesta = await axios.get(
            url,
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