require("dotenv").config();

const express = require("express");
const path = require("path");

const app = express();

app.set("view engine", "ejs");

app.set(
    "views",
    path.join(__dirname, "views")
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const webRoutes = require("./routes/webRoutes");

app.use("/api/v1", webRoutes);

const PORT =
process.env.PORT || 4000;

app.listen(PORT, () => {

    console.log(
        `Frontend ejecutándose en puerto ${PORT}`
    );

});