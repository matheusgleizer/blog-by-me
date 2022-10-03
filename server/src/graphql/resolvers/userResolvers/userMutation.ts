import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import Token from '../../../database/models/token';
import User from '../../../database/models/user';
import 'dotenv/config';
import { stringify } from 'querystring';

const TOKEN_KEY = process.env.TOKEN_KEY;

const cookieOpts = {
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
};

export const createUser = async (
  _: any,
  args: any,
  ctx: any
): Promise<object> => {
  const {
    input: { displayName, firstName, lastName, email, password },
  } = args;

  const date = new Date();

  const salt = bcrypt.genSaltSync(10);

  const user = await User.create({
    displayName,
    firstName,
    lastName,
    date,
    email,
    password: bcrypt.hashSync(password, salt),
  }).catch((error) => {
    console.log(error);
    throw new Error(error);
  });

  const token = jwt.sign(
    { _id: user._id.toString(), email: user.email },
    process.env.JWT_SECRET,
    {
      expiresIn: '1d',
    }
  );

  ctx.res.cookie(TOKEN_KEY, JSON.stringify(token), cookieOpts);

  return user;
};

export const signInUser = async (
  _: any,
  args: any,
  ctx: any
): Promise<object> => {
  const {
    input: { email, password },
  } = args;

  try {
    const user: any = await User.findOne({
      email,
    });

    const isValidPassword: boolean = bcrypt.compareSync(
      password,
      user.password
    );
    if (isValidPassword) {
      const token = jwt.sign(
        { _id: user._id, email: user.email },
        process.env.JWT_SECRET,
        {
          expiresIn: '1d',
        }
      );
      ctx.res.cookie(TOKEN_KEY, JSON.stringify(token), cookieOpts);
    }
    return {
      isAuthenticated: isValidPassword,
    };
  } catch (error: any) {
    throw new Error(error);
  }
};

export const signOutUser = async (
  _: any,
  _args: any,
  ctx: any
): Promise<object> => {
  const token: string = ctx.req.cookies['x-access-token'];
  if (token) {
    const newToken = new Token();
    newToken.tags.push(token);
    newToken.save();
  }
  ctx.res.clearCookie(TOKEN_KEY);
  return {
    status: 200,
  };
};
