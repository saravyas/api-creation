var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var router = require("./routes/index");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("am sara");
});

app.use("/", router);

app.listen(9876);
