import { prisma } from '../..';
import { ITag } from '../../../types';

export const getById = async (id: number): Promise<ITag | Error> => {
  try {
    const tag = await prisma.tag.findFirst({
      where: {
        id
      }
    });

    if(!tag) return new Error('Tag não encontrada'); 

    return tag;
  } catch (error) {
    return new Error('Erro ao pegar o registro');
  }
  
};