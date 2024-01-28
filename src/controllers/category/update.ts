import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { categoryProvider } from '../../database/providers/category';

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction 
) => {
  const { id } = req.params;
  
  const result = await categoryProvider.update(Number(id), req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};