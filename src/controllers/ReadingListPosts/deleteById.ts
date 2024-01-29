import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ReadingListPostsProvider } from '../../database/providers/ReadingListPosts';

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await ReadingListPostsProvider.deleteById(req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};