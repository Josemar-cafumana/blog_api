import { prisma } from '../..';
import { IPost } from '../../../types';

interface IData {
  data: IPost[];
  total: number
}

export const getAll = async (page: number , size: number, title: string | undefined, user:  string | undefined, category: string | undefined ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.post.findMany({
        skip,
        take: size,
        include: {
          user: true,
          category: { select: { name: true }},
          _count: {
            select: {
              comments: true,
              likes: true
            }
          }
        },
        where: {
          status: 'PUBLISHED',
          ...(title && { title: { contains: title.toLocaleLowerCase() } }),
          ...(user && { user: { name: { contains: user.toLocaleLowerCase() } } }),
          ...(category && { category: { name: { contains: category.toLocaleLowerCase() } } }),
        },
      }),
      prisma.post.count({
        where: {
          status: 'PUBLISHED',
          ...(title && { title: { contains: title.toLocaleLowerCase() } }),
          ...(user && { user: { name: { contains: user.toLocaleLowerCase() } } }),
          ...(category && { category: { name: { contains: category.toLocaleLowerCase() } } }),
        },
      }),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};