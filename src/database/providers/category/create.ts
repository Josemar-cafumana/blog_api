import { prisma } from '../../../database';
import { ICategory } from '../../../types';

export const create = async (name: string): Promise<ICategory | Error> => {
  try {
    const categoryAlreadyExist = await prisma.category.findUnique({
      where: {
        name
      }
    });

    if(categoryAlreadyExist) return new Error('A categoria informada já foi cadastrada'); 

    const category = await prisma.category.create({
      data: {
        name,
      }
    });

    return category;
  } catch (error) {
    return new Error('Erro ao cadastrar o registro');
  }
  
};