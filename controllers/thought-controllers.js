const { users, thoughts } = require("../models");
const { find } = require("../models/users");

const thougthController = {
  // create thought
  addThought({ body }, res) {
    thoughts
      // below I may need to desture this to just body and add {body}where req is
      .create(body)
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => res.status(400).json(err));
  },

  // Get all request
  getAllThoughts(req, res) {
    thoughts
      .find({})
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404);
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // get thougth by id
  getSingleThought(req, res) {
    thoughts
      .findOne({ _id: req.params.id })
      .select("thought")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "sorry that thought doesn't exist" });
          return;
        }
        res.json({ dbThoughtData });
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  //update thougth

  // delete thought
};

module.exports = thougthController;