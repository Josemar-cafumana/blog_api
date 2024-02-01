import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { readingListsProvider } from '../../database/providers/readingLists';

interface AuthenticatedRequest
  extends Request {
  user?: number;
}

export const create = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  
  const result = await readingListsProvider.create({...req.body, user_id: Number(req.user!)});

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};