import { prisma } from '../..';
import { IPost } from '../../../types';

interface IData {
  data: IPost[];
  total: number
}

export const getAll = async (page: number , size: number ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.post.findMany({
        skip,
        take: size,
        include: {
          user: true,
          _count: {
            select: {
              comments: true,
              likes: true
            }
          }
        }
      }),
      prisma.post.count(),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};