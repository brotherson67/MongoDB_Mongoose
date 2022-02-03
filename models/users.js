const { Schema, model } = require("mongoose");

// create user schema
const UserSchema = new Schema(
  {
    userName: {
      type: String,
      // required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      // required: true,
      match: [/.+@.+\..+/],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "thoughts",
      },
    ],
    connections: [
      {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

UserSchema.virtual("connectionsAmount").get(function () {
  return this.connections.length;
});

const users = model("users", UserSchema);

module.exports = users;
