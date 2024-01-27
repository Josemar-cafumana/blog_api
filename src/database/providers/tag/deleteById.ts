import { prisma } from '../..';

export const deleteById = async (id: number): Promise<number | Error> => {
  try {
    const tagExists = await prisma.tag.findFirst({
      where: {
        id
      }
    });

    if(!tagExists) return new Error('Tag não encontrada'); 

    const tag = await prisma.tag.delete({
      where: {
        id
      }
    });

    return tag.id;
  } catch (error) {
    return new Error('Erro ao deletar o registro');
  }
  
};