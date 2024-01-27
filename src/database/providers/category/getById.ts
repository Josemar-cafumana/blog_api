import { prisma } from '../..';
import { ICategory } from '../../../types';

export const getById = async (id: number): Promise<ICategory | Error> => {
  try {
    const category = await prisma.category.findFirst({
      where: {
        id
      }
    });

    if(!category) return new Error('Categoria não encontrada'); 

    return category;
  } catch (error) {
    return new Error('Erro ao pegar o registro');
  }
  
};