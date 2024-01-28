import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { IUser } from '../../types';
import { authProvider } from '../../database/providers/auth';
import { jwtService } from '../../shared/services';
import { refreshTokenProvider } from '../../database/providers/refreshToken';


export const signIn = async (
  req: Request<unknown, unknown, IUser>,
  res: Response,
  next: NextFunction
) => {
  const { email, password } = req.body;
  
  const result = await authProvider.signIn(email, password);

  if(result instanceof Error) {
    return next(result);
  }
  
  const acessToken = jwtService.signIn({ id: result.id, email: result.email, name: result.email }, '5h');
  if(acessToken === 'JWT_SECRET_NOT_FOUND') {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'Erro ao gerar token de acesso'} });
  }

  const refreshToken = await refreshTokenProvider.generateRefreshToken(result.id!);

  if(refreshToken instanceof Error) {
    return next(refreshToken);
  }


  return res.json({ acessToken , refreshToken }).status(StatusCodes.OK);
};