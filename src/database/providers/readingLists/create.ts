import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IReadingLists } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (data: IReadingLists): Promise<IReadingLists | Error> => {
  try {
    const readingListsAlreadyExist = await prisma.readingLists.findFirst({
      where: {
        name: data.name,
        user_id: Number(data.user_id)
      }
    });

    if(readingListsAlreadyExist) return new ApiError('A Lista de leitura informada já foi cadastrada', StatusCodes.BAD_REQUEST); 

    const readingLists = await prisma.readingLists.create({
      data: {
        name: data.name,
        is_public: data.is_public,
        user_id: Number(data.user_id)
      }
    });

    return readingLists;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};