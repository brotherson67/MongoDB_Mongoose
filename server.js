const express = require("express");
const res = require("express/lib/response");
const dbConnect = require("./connection/DBconnection");
const routesConnection = require("./routes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(routesConnection);

// NEED TO CHANGE THE OR STATEMENT TO ANOTHER PORT
dbConnect
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🌍 Connected on localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json(err);
  });

//Use this to log mongo queries being executed!
mongoose.set("debug", true);
