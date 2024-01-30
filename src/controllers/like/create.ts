import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ILike } from '../../types';
import { likeProvider } from '../../database/providers/like';

interface AuthenticatedRequest
  extends Request<unknown, unknown, { post_id: number} > {
  user?: number;
}

export const create = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { post_id } = req.body;

  const result = await likeProvider.create({ post_id, user_id: req.user!});

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};