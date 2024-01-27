import { prisma } from '../..';

export const deleteById = async (id: number): Promise<number | Error> => {
  try {
    const categoryExists = await prisma.category.findFirst({
      where: {
        id
      }
    });

    if(!categoryExists) return new Error('Categoria não encontrada'); 

    const category = await prisma.category.delete({
      where: {
        id
      }
    });

    return category.id;
  } catch (error) {
    return new Error('Erro ao deletar o registro');
  }
  
};