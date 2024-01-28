import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { authProvider } from '../../database/providers/auth';
import { sendMail } from '../../shared/services';
import { IMailOptions } from '../../types';


export const forgotPassword = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  const user = await authProvider.forgotPassword(email);

  if(user instanceof Error) {
    return next(user);
  }

  // Enviar o email
  const link = `${process.env.API_URL}/auth/reset-password/${user.email}/${user.password_reset_token}`;

  const htmlOptions = {
    path: 'emails/resetPassword.html',
    replacements: { link }
  };

  const optionsMail : IMailOptions = {
    subject: 'Resetar senha',
    to: user.email,
    html: htmlOptions
  };

  const send = await sendMail(optionsMail);
  if(send instanceof Error) {
    return next(send);
  } 
  
 
  return res.json({ message: 'Verifique a sua caixa de email para resetar sua senha.' }).status(StatusCodes.OK);
};