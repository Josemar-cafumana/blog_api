import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICategory } from '../../types';
import { categoryProvider } from '../../database/providers/category';

export const create = async (
  req: Request<unknown,unknown,ICategory>,
  res: Response,
  next: NextFunction
) => {
  const { name } = req.body;
  
  const result = await categoryProvider.create(name);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};