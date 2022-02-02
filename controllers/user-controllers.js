const users = require("../models/users");

const userController = {
  // add everything in here

  //test to see if server is working correctly
  getUser(req, res) {
    users
      .find({})
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  },

  // Get single user by id
  getUserById({ params }, res) {
    users
      .findOne({ _id: params._id })
      .then((dbUserData) => {
        // retrun 404 if no user
        if (!dbUserData) {
          res
            .status(404)
            .json({ message: "User not found. this is what is showing" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  },

  // Create User
  createUser({ body }, res) {
    users
      .create(body)
      .then((dbUserData) => {
        res.json(dbUserData);
      })
      .catch((err) => res.status(400).json(err));
  },

  // Update User
  updateUser({ params, body }, res) {
    users
      .findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "User not found." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // Delete User
  deleteUser({ params }, res) {
    users
      .findOneAndDelete({ _id: params.id }, res)
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "User not found." });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // down here I can add the links to other users as friends
};

module.exports = userController;
