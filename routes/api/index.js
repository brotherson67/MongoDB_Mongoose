// CREATE EXPRESS INSTANCE
const router = require("express").Router();

// IMPORT ROUTES
const user = require("./user-routes");

// ASSIGN URI
router.use("/user", user);

// EXPORT ALL
module.exports = router;
