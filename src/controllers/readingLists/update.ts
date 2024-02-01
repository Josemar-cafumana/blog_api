import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { readingListsProvider } from '../../database/providers/readingLists';

interface AuthenticatedRequest
  extends Request {
  user?: number;
}

export const update = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await readingListsProvider.update(Number(id), {...req.body, user_id: Number(req.user!)});

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};