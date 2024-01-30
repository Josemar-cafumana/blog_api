import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IReadingLists } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const update = async (id: number, data: IReadingLists): Promise<IReadingLists | Error> => {
  try {
    const readingListsExists = await prisma.readingLists.findFirst({
      where: {
        id
      }
    });

    if(!readingListsExists) return new ApiError('Lista de leitura não encontrada', StatusCodes.NOT_FOUND); 

    const readingLists = await prisma.readingLists.update({
      where: {
        id
      },
      data: {
        name: data.name,
        is_public: Boolean(JSON.parse(String(data.is_public))) ,
        user_id: data.user_id
      }
    });

    return readingLists;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};