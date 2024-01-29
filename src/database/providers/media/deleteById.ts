import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';

export const deleteById = async (id: number): Promise<number | Error> => {
  try {
    
    const media = await prisma.media.delete({
      where: {
        id
      }
    });

    return media.id;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};