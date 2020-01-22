const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ encoding: "latin1" });

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log(`You are now connected on Port ${process.env.PORT}`);
});
