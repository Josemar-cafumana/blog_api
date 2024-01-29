import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { postProvider } from '../../database/providers/post';

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await postProvider.update(Number(id), req.body);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};