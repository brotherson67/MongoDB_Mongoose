import { Schema, model } from "mongoose";

// create user schema
const UserSchema = new Schema(
  {
    userName: {
      type: string,
    },
    password: {
      type: string,
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

export default UserSchema;
