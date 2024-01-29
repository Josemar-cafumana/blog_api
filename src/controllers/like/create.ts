import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ILike } from '../../types';
import { likeProvider } from '../../database/providers/like';

export const create = async (
  req: Request<unknown,unknown,ILike>,
  res: Response,
  next: NextFunction
) => {
  
  const result = await likeProvider.create(req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};