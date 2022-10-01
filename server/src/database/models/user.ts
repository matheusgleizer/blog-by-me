import { ObjectId, Document, Model, Schema, model } from 'mongoose';

export interface IUser extends Document {
  id: ObjectId;
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
    required: true;
  };
  createdAt: {
    type: Date;
  };
  email: string;
}

const userSchema = new Schema<IUser>({
  id: { type: String, required: true },
  googleId: {
    type: String,
    required: true,
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
});

const User = model<IUser>('User', userSchema);

export default User;
