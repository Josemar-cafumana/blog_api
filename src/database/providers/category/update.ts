import { prisma } from '../..';
import { ICategory } from '../../../types';

export const update = async (id: number, data: ICategory): Promise<ICategory | Error> => {
  try {
    const categoryExists = await prisma.category.findFirst({
      where: {
        id
      }
    });

    if(!categoryExists) return new Error('Categoria não encontrada'); 

    const category = await prisma.category.update({
      where: {
        id
      },
      data: {
        name: data.name
      }
    });

    return category;
  } catch (error) {
    return new Error('Erro ao actualizar o registro');
  }
  
};