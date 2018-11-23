import mongoose, { Schema } from "mongoose";
import "dotenv/config";
mongoose.Promise = require("bluebird");

mongoose
  .connect(`mongodb://${process.env.username}:${process.env.password}@ds237748.mlab.com:37748/users`,
    { useMongoClient: true },
  )
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

const userschema = Schema({
  username: "String",
  password: "String",
});

module.exports = mongoose.model("login", userschema);
