import express from "express";
import bodyParser from "body-parser";
import router from "./routes/index";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "Please enter Proper Url" });
});

app.use("/api/users", router);

app.listen(9876);
