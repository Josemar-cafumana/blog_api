import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { tagProvider } from '../../database/providers/tag';

export const getById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  
  const result = await tagProvider.getById(Number(id));

  if(result instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: { message: result.message} });
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};