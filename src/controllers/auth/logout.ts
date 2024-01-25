import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export const logout = async (
  req: Request,
  res: Response
) => {
  
  return res.json({}).status(StatusCodes.OK);
};