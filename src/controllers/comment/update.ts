import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { commentProvider } from '../../database/providers/comment';

interface AuthenticatedRequest extends Request {
  user?: number;
}

export const update = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await commentProvider.update(Number(id), {...req.body, user_id: Number(req.user)}, Number(req.user));

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};