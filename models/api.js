import mongoose, { Schema } from "mongoose";
mongoose.Promise = require("bluebird");

mongoose
  .connect(
    "mongodb://saravyas:sara8489507766@ds237748.mlab.com:37748/users",
    { useMongoClient: true },
  )
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

const userschema = Schema({
  username: "String",
  password: "String",
});

module.exports = mongoose.model("login", userschema);
