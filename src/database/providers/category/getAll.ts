import { prisma } from '../..';
import { ICategory } from '../../../types';

interface IData {
  data: ICategory[];
  total: number
}

export const getAll = async (page: number , size: number ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.category.findMany({
        skip,
        take: size,
      }),
      prisma.category.count(),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};