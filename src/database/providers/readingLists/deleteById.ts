import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';

export const deleteById = async (id: number, user_id: number): Promise<number | Error> => {
  try {
    const readingListsExists = await prisma.readingLists.findFirst({
      where: {
        id,
        user_id: Number(user_id)
      }
    });

    if(!readingListsExists) return new ApiError('Lista de leitura não encontrada', StatusCodes.NOT_FOUND); 

    const readingLists = await prisma.readingLists.delete({
      where: {
        id
      }
    });

    return readingLists.id;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};