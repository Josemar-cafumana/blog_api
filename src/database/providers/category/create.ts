import { StatusCodes } from 'http-status-codes';
import { prisma } from '../../../database';
import { ICategory } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (name: string): Promise<ICategory | Error> => {
  try {
    const categoryAlreadyExist = await prisma.category.findUnique({
      where: {
        name
      }
    });

    if(categoryAlreadyExist) return new ApiError('A categoria informada já foi cadastrada', StatusCodes.BAD_REQUEST); 

    const category = await prisma.category.create({
      data: {
        name,
      }
    });

    return category;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};