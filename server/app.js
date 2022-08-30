const express = require("express");



const app = express();

const path = require("path");

const compression = require("compression");
const verifyLogin = require("./controllers");
const cookieParser = require("cookie-parser");


app.set("port", process.env.PORT || 8000);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(compression());
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'..','public')));


app.post('/login', verifyLogin);

module.exports = app;
