import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IProfile } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const getById = async (id: number): Promise<IProfile | Error> => {
  try {
    const profile = await prisma.profile.findFirst({
      where: {
        id,
      },
      include: {
        media: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
          }
        }
      }
    });

    if(!profile) return new ApiError('Perfil não encontrado', StatusCodes.NOT_FOUND); 

    return profile;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};