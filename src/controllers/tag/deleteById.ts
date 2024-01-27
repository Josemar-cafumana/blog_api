import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { tagProvider } from '../../database/providers/tag';

export const deleteById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  
  const result = await tagProvider.deleteById(Number(id));

  if(result instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: { message: result.message} });
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};