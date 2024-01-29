import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IReadingLists } from '../../types';
import { readingListsProvider } from '../../database/providers/readingLists';

export const create = async (
  req: Request<unknown,unknown,IReadingLists>,
  res: Response,
  next: NextFunction
) => {
  
  const result = await readingListsProvider.create(req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};