import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index";

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.send("am sara");
});

app.use("/api/users", router);

app.listen(9876);
