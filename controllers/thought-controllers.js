const { users, thoughts } = require("../models");
const { find } = require("../models/users");

const thougthController = {
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
};

module.exports = thougthController;
