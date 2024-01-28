import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ITag } from '../../types';
import { tagProvider } from '../../database/providers/tag';

export const create = async (
  req: Request<unknown,unknown,ITag>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  
  const result = await tagProvider.create(name);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};