import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ICategory } from '../../types';
import { categoryProvider } from '../../database/providers/category';

export const create = async (
  req: Request<unknown,unknown,ICategory>,
  res: Response
) => {
  const { name } = req.body;
  
  const result = await categoryProvider.create(name);

  if(result instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: { message: result.message} });
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};