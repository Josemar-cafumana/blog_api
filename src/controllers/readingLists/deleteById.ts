import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { readingListsProvider } from '../../database/providers/readingLists';

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await readingListsProvider.deleteById(Number(id));

  if(result instanceof Error) {
    return next(result);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};