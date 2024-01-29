import { prisma } from '../..';
import { IMedia } from '../../../types';

interface IData {
  data: IMedia[];
  total: number
}

export const getAll = async (page: number , size: number ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.media.findMany({
        skip,
        take: size,
      }),
      prisma.media.count(),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};