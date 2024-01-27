import { prisma } from '../../../database';
import { ICategory } from '../../../types';

export const getAll = async (): Promise<ICategory[] | Error> => {
  try {
    const categories = await prisma.category.findMany();

    return categories;
  } catch (error) {
    return new Error('Erro ao pegar registros');
  }
  
};