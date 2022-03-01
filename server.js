const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/pizza-hunt",
  {}
);
mongoose.set("debug", true);

app.use(require("./routes"));

app.listen(PORT, () => console.log(`Connected on port ${PORT}`));
