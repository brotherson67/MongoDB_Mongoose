const router = require("express").Router();

const {
  addThought,
  getAllThoughts,
  getSingleThought,
  updateThought,
  updateThought,
  removeThought,
} = require("../../controllers/thought-controllers");

router.route("/thoughts").post(addThought).get(getAllThoughts);

router
  .route("/thoughts/:id")
  .get(getSingleThought)
  .put(updateThought)
  .delete(removeThought);

module.exports = router;
