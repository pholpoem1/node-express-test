const express = require("express");
const chalk = require("chalk");
const debug = require("debug")("app");
const morgan = require("morgan");
const path = require("path");

const app = express();
const PORT = process.env.PORT;

app.use(morgan("combind"));
app.use(express.static(path.join(__dirname, "/public/")));

app.set("views", "./src/views");
app.set("view engine", "EJS");

app.get("/", (req, res) => {
  // res.send("Hello Jintana");
  res.render("index", {
    username: "Nueng Naja",
    customers: ["John Doe___", "Jane Doe", "Sam Smith"],
  });
});

app.listen(PORT, () => {
  console.log("Listening on port :>> ", chalk.blue(PORT));
});
