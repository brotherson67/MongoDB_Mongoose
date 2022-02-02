const express = require("express");
const dbConnect = require("./connection/dbConnection");
const routesConnection = require("./routes");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("public"));

app.use(routesConnection);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/smbackend", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(PORT, () => console.log(`App is running on port ${PORT}`));

//Use this to log mongo queries being executed!
mongoose.set("debug", true);
