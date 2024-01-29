import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { favoriteProvider } from '../../database/providers/favorite';

export const deleteByPostUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
 
  const result = await favoriteProvider.deleteByPostUser(req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};