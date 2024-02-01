import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authProvider } from '../../database/providers/auth';


export const resetPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email, token } = req.params;
  const { password } = req.body;

  const user = await authProvider.resetPassword(email, token, password);

  if(user instanceof Error) {
    return next(user);
  }

  return res.json({ data: {...user, password: null }}).status(StatusCodes.OK);
};