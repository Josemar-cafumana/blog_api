import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';

export const deleteById = async (id: number): Promise<number | Error> => {
  try {
    const tagExists = await prisma.tag.findFirst({
      where: {
        id
      }
    });

    if(!tagExists) return new ApiError('Tag não encontrada', StatusCodes.NOT_FOUND); 

    const tag = await prisma.tag.delete({
      where: {
        id
      }
    });

    return tag.id;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};