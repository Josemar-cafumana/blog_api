import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export const resetPassword = async (
  req: Request,
  res: Response
) => {
  
  return res.json({}).status(StatusCodes.OK);
};