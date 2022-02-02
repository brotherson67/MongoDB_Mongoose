const Mongoose = require("mongoose");

async function dbConnect() {
  return Mongoose.connect(
    process.env.MOGODB_URI || "mongodb://localhost/smbackend"
  );
}

module.exports = dbConnect;
