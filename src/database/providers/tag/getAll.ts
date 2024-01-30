import { prisma } from '../..';
import { ITag } from '../../../types';

interface IData {
  data: ITag[];
  total: number
}

export const getAll = async (page: number , size: number, name: string | undefined ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.tag.findMany({
        skip,
        take: size,
        where: {
          ...(name && { name: { contains: name.toLocaleLowerCase() } }),
        }
      }),
      prisma.tag.count({
        where: {
          ...(name && { name: { contains: name.toLocaleLowerCase() } }),
        }
      }),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};