import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authProvider } from '../../database/providers/auth';


export const resetPassword = async (
  req: Request,
  res: Response
) => {
  const { email, token } = req.params;
  const { password } = req.body;

  const user = await authProvider.resetPassword(email, token, password);

  if(user instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: { message: user.message} });
  }

  return res.json({ data: user}).status(StatusCodes.OK);
};