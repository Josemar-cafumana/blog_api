import { prisma } from '../..';
import { ITag } from '../../../types';

export const create = async (name: string): Promise<ITag | Error> => {
  try {
    const tagAlreadyExist = await prisma.tag.findUnique({
      where: {
        name
      }
    });

    if(tagAlreadyExist) return new Error('A tag informada já foi cadastrada'); 

    const tag = await prisma.tag.create({
      data: {
        name,
      }
    });

    return tag;
  } catch (error) {
    return new Error('Erro ao cadastrar o registro');
  }
  
};