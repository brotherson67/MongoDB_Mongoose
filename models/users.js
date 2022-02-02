const { Schema, model } = require("mongoose");

// create user schema
const UserSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      match: [/.+@.+\..+/],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: thoughts,
      },
    ],
    connections: [
      {
        type: this.schema.Types.ObjectId,
        ref: users,
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

UserSchema.virtuals("connections").get(function () {
  return this.connections.length;
});

const User = model("User", UserSchema);

module.exports = User;
