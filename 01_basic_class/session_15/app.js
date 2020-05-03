const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require("./routes/routes.js")(app, fs);

const server = app.listen(5000, function () {
    console.log("listening on port %s...", server.address().port);
});