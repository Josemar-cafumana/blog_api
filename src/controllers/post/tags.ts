import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { postProvider } from '../../database/providers/post';

interface AuthenticatedRequest
  extends Request {
  user?: number;
}

export const tags = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { post_id, tags } = req.body;
  
  const result = await postProvider.tags(post_id, tags, Number(req.user!));

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};