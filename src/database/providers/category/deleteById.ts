import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';

export const deleteById = async (id: number): Promise<number | Error> => {
  try {
    const categoryExists = await prisma.category.findFirst({
      where: {
        id
      }
    });

    if(!categoryExists) return new ApiError('Categoria não encontrada', StatusCodes.NOT_FOUND); 

    const category = await prisma.category.delete({
      where: {
        id
      }
    });

    return category.id;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};