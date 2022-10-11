import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../../../database/models/user';
import 'dotenv/config';
import { AuthenticationError } from 'apollo-server-core';
import { tokenGenerator } from '../../../config/middleware/auth';

export const createUser = async (
  _: any,
  args: any,
  context: any
): Promise<object> => {

  const {
    input: { displayName, firstName, lastName, email, password },
  } = args;

  const createdAt = new Date();

  const salt = bcrypt.genSaltSync(10);

  const user = await User.create({
    displayName,
    firstName,
    lastName,
    createdAt,
    email,
    password: bcrypt.hashSync(password, salt),
  }).catch((error) => {
    console.log(error);
    throw new Error(error);
  });

  if (user) {
    const token = tokenGenerator(user._id);

    return {
      user,
      isAuthenticated: true,
      token,
    };
  }

  return {
    user: null,
    isAuthenticated: false,
    token: null,
  };
};

export const signInUser = async (
  _: any,
  args: any,
  context: any
): Promise<object> => {
  console.log('here')
  const {
    input: { email, password },
  } = args;

  const user: any = await User.findOne({
    email,
  });

  if (user) {
    const isValidPassword: boolean = bcrypt.compareSync(
      password,
      user.password
    );

    if (!isValidPassword) {
      return new AuthenticationError('Invalid password');
    }

    const token = jwt.sign(
      { _id: user._id.toString() },
      process.env.JWT_SECRET,
      {
        expiresIn: '1d',
      }
    );

    return {
      user,
      isAuthenticated: isValidPassword,
      token,
    };
  }
  return new AuthenticationError('Invalid email address');
};

export const signOutUser = (_: any, _args: any, context: any): any => {
  return {
    user: null,
    isAuthenticated: false,
    token: null,
  };
};
