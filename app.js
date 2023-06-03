const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const port = 4000;

app.use(morgan("combind"));
app.use(express.static(path.join(__dirname, "/src/")));

app.get("/", (req, res) => {
  res.send("Hello Jintana");
});

app.listen(port, () => {
  console.log("Listening on port :>> ", chalk.blue("!!!"));
});
