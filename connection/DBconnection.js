const Mongoose = require("mongoose");

async function dbConnect() {
  return Mongoose.connect("mongodb://localhost/smbackend");
}

module.exports = dbConnect;
