import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IFavorite } from '../../types';
import { favoriteProvider } from '../../database/providers/favorite';

interface AuthenticatedRequest
  extends Request {
  user?: number;
}

export const create = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  
  const result = await favoriteProvider.create({...req.body, user_id: req.user!});

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};