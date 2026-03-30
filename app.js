const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("HI am not sankalp");
});

app.listen(3000);