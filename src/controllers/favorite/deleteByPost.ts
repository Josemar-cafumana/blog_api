import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { favoriteProvider } from '../../database/providers/favorite';

interface AuthenticatedRequest
  extends Request<unknown, unknown, { post_id: number }> {
  user?: number;
}

export const deleteByPost = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { post_id } = req.body;
  const result = await favoriteProvider.deleteByPost({ post_id, user_id: req.user! });

  if(result instanceof Error) {
    return next(result);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};