import mongoose, { Schema } from "mongoose";
mongoose.Promise = require("bluebird");

mongoose
  .connect(
    "mongodb://localhost/apidb",
    { useMongoClient: true },
  )
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

const userschema = Schema({
  username: "String",
  password: "String",
});

export default mongoose.model("login", userschema);
