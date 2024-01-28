import { prisma } from '../..';
import dayjs from 'dayjs';
import { RefreshToken, User } from '@prisma/client';
import { ApiError } from '../../../utils/appError';
import { STATUS_CODES } from 'http';
import { StatusCodes } from 'http-status-codes';

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
      return new ApiError('Refresh token inválido', StatusCodes.UNAUTHORIZED);
    }

    return refreshToken;
  } catch (error : unknown) {
    return new Error(error as string);
  }
};