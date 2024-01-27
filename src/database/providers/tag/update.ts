import { prisma } from '../..';
import { ITag } from '../../../types';

export const update = async (id: number, data: ITag): Promise<ITag | Error> => {
  try {
    const tagExists = await prisma.tag.findFirst({
      where: {
        id
      }
    });

    if(!tagExists) return new Error('Tag não encontrada'); 

    const tag = await prisma.tag.update({
      where: {
        id
      },
      data: {
        name: data.name
      }
    });

    return tag;
  } catch (error) {
    return new Error('Erro ao actualizar o registro');
  }
  
};