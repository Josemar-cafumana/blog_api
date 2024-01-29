import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { likeProvider } from '../../database/providers/like';

export const deleteByPostUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
 
  const result = await likeProvider.deleteByPostUser(req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};