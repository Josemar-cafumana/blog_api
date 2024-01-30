import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { commentProvider } from '../../database/providers/comment';

interface AuthenticatedRequest extends Request {
  user?: number ;
}

export const deleteById = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await commentProvider.deleteById(Number(id), Number(req.user));

  if(result instanceof Error) {
    return next(result);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};