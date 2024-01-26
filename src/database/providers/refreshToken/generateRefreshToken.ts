import { prisma } from '../..';
import dayjs from 'dayjs';
import { RefreshToken } from '@prisma/client';

export const generateRefreshToken = async (user_id: number): Promise<RefreshToken  | Error> => {
  try {
    await prisma.refreshToken.deleteMany({ where: { user_id }});
    
    const expires_in = dayjs().add(1, 'day').unix();

    const refreshToken = await prisma.refreshToken.create({
      data: {
        user_id,
        expires_in
      }
    });

    return refreshToken;
  } catch (error) {
    return new Error('Erro ao gerar refresh token');
  }
};