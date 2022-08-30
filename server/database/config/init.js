const { readFileSync } = require("fs");
const { join } = require("path");
const connection = require("./connection");

const sql = readFileSync(join(__dirname, "init.sql")).toString();
const build = () => {
  return connection.query(sql);
};
build().then((data) => console.log("database has inited"));
module.exports = build;
