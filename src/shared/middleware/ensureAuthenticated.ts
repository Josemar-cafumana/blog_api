import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { jwtService } from '../services';

export const ensureAuthenticated: RequestHandler =  async (req, res, next) => {
  const { authorization } = req.headers;

  if(!authorization) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { message: 'Não autenticado'}
    });
  }

  const [type, token] = authorization.split(' ');

  const jwtData = jwtService.verify(token);


  if(jwtData == 'INVALID_TOKEN') {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { message: 'Token Inválido'}
    });
  }

  if(jwtData == 'JWT_SECRET_NOT_FOUND') {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { message: 'Erro ao gerar token de acesso'}
    });
  }

  return next();
};