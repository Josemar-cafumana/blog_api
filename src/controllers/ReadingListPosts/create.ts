import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ReadingListPostsProvider } from '../../database/providers/ReadingListPosts';

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await ReadingListPostsProvider.create(req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};