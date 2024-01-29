import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IMedia } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const getById = async (id: number): Promise<IMedia | Error> => {
  try {
    const media = await prisma.media.findFirst({
      where: {
        id
      }
    });

    if(!media) return new ApiError('Media não encontrada', StatusCodes.NOT_FOUND); 

    return media;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};