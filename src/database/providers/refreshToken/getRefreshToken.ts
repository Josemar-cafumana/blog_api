import { prisma } from '../..';
import dayjs from 'dayjs';
import { RefreshToken, User } from '@prisma/client';

interface IRefreshToken extends RefreshToken {
  user: User
}

export const getRefreshToken = async (refresh_token: string): Promise<IRefreshToken  | Error> => {
  try {
    const refreshToken = await prisma.refreshToken.findFirst({
      where: {
        id: refresh_token
      },
      include: {
        user: true
      }
    });

    if(!refreshToken) {
      return new Error('Refresh token inválido');
    }

    return refreshToken;
  } catch (error) {
    return new Error('Erro ao gerar refresh token');
  }
};