import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IFavorite } from '../../types';
import { favoriteProvider } from '../../database/providers/favorite';

export const create = async (
  req: Request<unknown,unknown,IFavorite>,
  res: Response,
  next: NextFunction
) => {
  
  const result = await favoriteProvider.create(req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};