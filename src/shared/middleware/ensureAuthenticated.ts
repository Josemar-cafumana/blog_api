import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';
import { jwtService } from '../services';

interface AuthenticatedRequest extends Request {
  user?: number | null;
}

export const ensureAuthenticated = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) {
    req.user = null;

    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { message: 'Não autenticado' }
    });
  }

  const [type, token] = authorization.split(' ');

  const jwtData = jwtService.verify(token);

  if (jwtData === 'INVALID_TOKEN') {
    req.user = null;

    return res.status(StatusCodes.UNAUTHORIZED).json({
      errors: { message: 'Token Inválido' }
    });
  }

  if (jwtData === 'JWT_SECRET_NOT_FOUND') {
    req.user = null;

    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: { message: 'Erro ao gerar token de acesso' }
    });
  }


  req.user = jwtData.id;

  next();
};
