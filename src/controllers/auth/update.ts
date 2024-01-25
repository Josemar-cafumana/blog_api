import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


export const update = async (
  req: Request,
  res: Response
) => {
  
  return res.json({}).status(StatusCodes.OK);
};