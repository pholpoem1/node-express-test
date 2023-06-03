const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const app = express();
const port = 4000;

app.use(morgan("combind"));

app.get("/", (req, res) => {
  res.send("Hello Jintana");
});

app.listen(port, () => {
  console.log("Listening on port :>> ", chalk.blue("!!!"));
});
