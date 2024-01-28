import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ICategory } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const getById = async (id: number): Promise<ICategory | Error> => {
  try {
    const category = await prisma.category.findFirst({
      where: {
        id
      }
    });

    if(!category) return new ApiError('Categoria não encontrada', StatusCodes.NOT_FOUND); 

    return category;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};