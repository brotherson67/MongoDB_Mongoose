const { Schema, model } = require("mongoose");

// create user schema
const UserSchema = new Schema(
  {
    userName: {
      type: String,
    },
    password: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const User = model("User", UserSchema);

module.exports = User;
