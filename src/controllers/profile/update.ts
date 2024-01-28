import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { profileProvider } from '../../database/providers/profile';

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await profileProvider.update(Number(id), req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};