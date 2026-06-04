// middlewares/apiKey.middleware.js

const verificarApiKey = (req, res, next) => {

    const apiKey = req.headers["x-api-key"];

    if (!apiKey) {
        return res.status(401).json({
            mensaje: "API Key requerida"
        });
    }

    if (apiKey !== process.env.API_KEY) {
        return res.status(401).json({
            mensaje: "API Key inválida"
        });
    }

    next();
};

module.exports = verificarApiKey;