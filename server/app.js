const express = require("express");

const app = express();

const path = require("path");

const compression = require("compression");

app.set("port", process.env.PORT || 8000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());

module.exports = app;
