import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ICategory } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const update = async (id: number, data: ICategory): Promise<ICategory | Error> => {
  try {
    const categoryExists = await prisma.category.findFirst({
      where: {
        id
      }
    });

    if(!categoryExists) return new ApiError('Categoria não encontrada', StatusCodes.NOT_FOUND); 

    const categoryAlreadyExist = await prisma.category.findUnique({
      where: {
        name: data.name
      }
    });

    if(categoryAlreadyExist) return new ApiError('A categoria informada já foi cadastrada', StatusCodes.BAD_REQUEST); 
    
    const category = await prisma.category.update({
      where: {
        id
      },
      data: {
        name: data.name
      }
    });

    return category;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};