import { rmSync } from "fs";
import users from "../models/users";

const userController = {
  // add everything in here

  // Get single user by id
  getUserById({ params }, res) {
    users
      .findOne({ _id: params._id })
      .then((dbUserData) => {
        // retrun 404 if no user
        if (!dbUserData) {
          res.status(404).json({ message: "User not found." });
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

  // Update User

  // Delete User
};

export default userController;
