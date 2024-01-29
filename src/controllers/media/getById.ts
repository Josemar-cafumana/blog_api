import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { mediaProvider } from '../../database/providers/media';

export const getById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await mediaProvider.getById(Number(id));

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};