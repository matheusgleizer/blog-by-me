import { ObjectId, Document, Schema, model } from 'mongoose';

export interface IUser extends Document {
  displayName: {
    type: string;
    required: true;
  };
  firstName: {
    type: string;
    required: true;
  };
  lastName: {
    type: string;
    required: true;
  };
  image: {
    type: string;
  };
  googleId: {
    type: string;
    required: false;
  };
  createdAt: {
    type: Date;
  };
  email: {
    type: string;
    unique: true;
  };
  password: {
    type: string;
    min: 6;
    max: 1024;
    unique: false;
    required: true;
  };
}

const userSchema = new Schema<IUser>(
  {
    googleId: {
      type: String,
      required: false,
    },
    displayName: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: String,
      min: 6,
      max: 255,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      max: 1024,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

const User = model<IUser>('User', userSchema);

export default User;
