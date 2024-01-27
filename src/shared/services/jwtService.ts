import { IUser } from '../../types';
import * as jwt from 'jsonwebtoken';

const signIn = (data: Omit<IUser, 'password'>, expiresIn: string): string | 'JWT_SECRET_NOT_FOUND' => {
  if(!process.env.JWT_SECRET) return 'JWT_SECRET_NOT_FOUND';

  return jwt.sign(data, process.env.JWT_SECRET, {
    expiresIn,
  });
};

const verify = (token: string): jwt.JwtPayload | 'JWT_SECRET_NOT_FOUND' | 'INVALID_TOKEN' => {
  if(!process.env.JWT_SECRET) return 'JWT_SECRET_NOT_FOUND';

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if(typeof decoded === 'string') {
      return 'INVALID_TOKEN';
    }
    return decoded;
  } catch (error) {
    return 'INVALID_TOKEN';
  }
 
};

const resetTokenSignIn = (email: string, expiresIn: string): string | 'JWT_SECRET_NOT_FOUND' => {
  if(!process.env.JWT_SECRET_RESET_PASSWORD) return 'JWT_SECRET_NOT_FOUND';

  return jwt.sign({ email }, process.env.JWT_SECRET_RESET_PASSWORD, {
    expiresIn,
  });
};

const resetTokenverify = (token: string): jwt.JwtPayload | 'JWT_SECRET_NOT_FOUND' | 'INVALID_TOKEN' => {
  if(!process.env.JWT_SECRET_RESET_PASSWORD) return 'JWT_SECRET_NOT_FOUND';

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_RESET_PASSWORD);
    if(typeof decoded === 'string') {
      return 'INVALID_TOKEN';
    }
    return decoded;
  } catch (error) {
    return 'INVALID_TOKEN';
  }
 
};

export const jwtService = {
  signIn,
  verify,
  resetTokenSignIn,
  resetTokenverify
};