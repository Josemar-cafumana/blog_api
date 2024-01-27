import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { sendMail } from '../../shared/services';


export const logout = async (
  req: Request,
  res: Response
) => {

  return res.json({}).status(StatusCodes.OK);
};