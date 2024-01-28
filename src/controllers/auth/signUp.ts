import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../../types';
import { authProvider } from '../../database/providers/auth';

export const signUp = async (
  req: Request<unknown,unknown,IUser>,
  res: Response,
  next: NextFunction
) => {
  const { name, email, password } = req.body;
  
  const result = await authProvider.signUp(name, email, password);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};