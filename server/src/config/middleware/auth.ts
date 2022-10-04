import jwt from 'jsonwebtoken';
import 'dotenv/config';

const JWT_SECRET = process.env.JWT_SECRET;
import User from '../../database/models/user';

export const tokenGenerator = (userId: string): any => {
  return jwt.sign({ id: userId }, JWT_SECRET, {expiresIn: '1d'});
};

export const getUserByToken = async (token: string): Promise<typeof User> => {
  const decoded: any = jwt.verify(token, JWT_SECRET);

  if (decoded) {
    return User.findById(decoded._id);
  }

  return null;
};
