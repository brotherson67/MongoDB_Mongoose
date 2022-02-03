// CREATE EXPRESS INSTANCE
const router = require("express").Router();

// IMPORT ROUTES
const user = require("./user-routes");
const thought = require("./thought-routes");

// ASSIGN URI
router.use("/user", user);
router.use("/thought", thought);

// EXPORT ALL
module.exports = router;
