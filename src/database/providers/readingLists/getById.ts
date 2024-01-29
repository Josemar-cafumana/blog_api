import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IReadingLists } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const getById = async (id: number): Promise<IReadingLists | Error> => {
  try {
    const readingLists = await prisma.readingLists.findFirst({
      where: {
        id
      },
      include: {
        reading_list_posts: {
          select: {
            post: true
          }
        }
      }
    });

    if(!readingLists) return new ApiError('Lista de leitura não encontrada', StatusCodes.NOT_FOUND); 

    return readingLists;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};