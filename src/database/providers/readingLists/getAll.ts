import { prisma } from '../..';
import { IReadingLists } from '../../../types';

interface IData {
  data: IReadingLists[];
  total: number
}

export const getAll = async (page: number , size: number, name: string | undefined ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;

    const [data, total] = await Promise.all([
      prisma.readingLists.findMany({
        skip,
        take: size,
        where: {
          ...(name && { name: { contains: name.toLocaleLowerCase() } }),
          is_public: true,
        },
        include: {
          reading_list_posts: {
            select: {
              post: true
            }
          }
        }
      }),
      prisma.readingLists.count({
        where: {
          ...(name && { name: { contains: name.toLocaleLowerCase() } }),
          is_public: true,
        },
      }),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};