import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { categoryProvider } from '../../database/providers/category';

export const update = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  
  const result = await categoryProvider.update(Number(id), req.body);

  if(result instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: { message: result.message} });
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};