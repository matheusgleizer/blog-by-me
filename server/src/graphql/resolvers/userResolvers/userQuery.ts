import User from '../../../database/models/user';
import jwt from 'jsonwebtoken';
import Token from '../../../database/models/token';

const TOKEN_KEY = 'x-access-token';

const generateToken = (str: string): string | null => {
  if (str) {
    try {
      const token = JSON.parse(str);
      return token;
    } catch (err) {
      return null;
    }
  }
  return null;
};

const isValidToken = (str: string): boolean => {
  if (str) {
    try {
      const token = generateToken(str);
      return !!jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      return false;
    }
  }
  return false;
};

const getStatus = (token: string, tokens: string[]): number => {
    return isValidToken(token) && tokens.length === 0 ? 200 : 401;
  };

export const getUserByEmail = async (_: any, args: any): Promise<object> => {
  const {
    input: { email },
  } = args;
  console.log(email);
  return User.findOne({ email });
};

export const isAuthenticated = async (
  _: any,
  _args: any,
  ctx: any
): Promise<object> => {
  const token: string = ctx.req.cookies['x-access-token'];       // ctx=context
  const tokens: string[] = await Token.find({ tags: token });
  const status: number = getStatus(ctx.req.cookies['x-access-token'], tokens);
  if (status === 401) {
    if (token) {
      const newToken = new Token();
      newToken.tags.push(token);
      newToken.save();
    }
    ctx.res.clearCookie(TOKEN_KEY);
  }
  return {
    status,
  };
};
