import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { jwtService } from '../../shared/services';
import dayjs from 'dayjs';
import { refreshTokenProvider } from '../../database/providers/refreshToken';

export const refreshTokenUser = async (
  req: Request,
  res: Response
) => {
  const { refresh_token } = req.body;
  
  const refreshToken = await refreshTokenProvider.getRefreshToken(refresh_token);
  
  if(refreshToken instanceof Error) {
    return res.status(StatusCodes.BAD_REQUEST).json({ errors: { message: refreshToken.message} });
  }


  const refreshTokenExpired = dayjs().isAfter(dayjs.unix(refreshToken.expires_in));

  const acessToken = jwtService.signIn({ id: refreshToken.user.id, email: refreshToken.user.email, name: refreshToken.user.email }, '10s');
  if(acessToken === 'JWT_SECRET_NOT_FOUND') {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { default: 'Erro ao gerar token de acesso'} });
  }

  if(refreshTokenExpired) {
    const newRefreshToken = await refreshTokenProvider.generateRefreshToken(refreshToken.user_id);

    if(newRefreshToken instanceof Error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ errors: { message: newRefreshToken.message} });
    }

    return res.json({ acessToken, refreshToken: newRefreshToken }).status(StatusCodes.OK);
  }

  


  return res.json({ acessToken, refreshToken  }).status(StatusCodes.OK);
};