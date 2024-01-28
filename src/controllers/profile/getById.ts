import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { profileProvider } from '../../database/providers/profile';

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await profileProvider.getById(Number(id));

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};