import { prisma } from '../..';
import { ITag } from '../../../types';

interface IData {
  data: ITag[];
  total: number
}

export const getAll = async (page: number , size: number ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.tag.findMany({
        skip,
        take: size,
      }),
      prisma.tag.count(),
    ]);

    return { data, total };
  } catch (error) {
    throw new Error('Erro ao pegar registros');
  }
  
};