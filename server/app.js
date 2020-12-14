const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
var cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/c19Data", (req, res) => {
  res.send(JSON.parse(fs.readFileSync("./data/ltla_2020-12-13.json")));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
