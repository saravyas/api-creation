import mongoose, { Schema } from "mongoose";
mongoose.Promise = require("bluebird");

mongoose
  .connect(
    "mongodb://saravyas:sara8489507766@ds155293.mlab.com:55293/users",
    { useMongoClient: true },
  )
  .then(() => console.log("Connected to db"))
  .catch(err => console.log(err));

const userschema = Schema({
  username: "String",
  password: "String",
});

export default mongoose.model("login", userschema);
