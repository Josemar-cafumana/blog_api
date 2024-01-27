import { prisma } from '../..';
import { ITag } from '../../../types';

export const getAll = async (): Promise<ITag[] | Error> => {
  try {
    const tags = await prisma.tag.findMany();

    return tags;
  } catch (error) {
    return new Error('Erro ao pegar registros');
  }
  
};