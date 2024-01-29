import { prisma } from '../..';
import { IReadingLists } from '../../../types';

interface IData {
  data: IReadingLists[];
  total: number
}

export const getAll = async (page: number , size: number, user_id: number ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.readingLists.findMany({
        skip,
        take: size,
        where: {
          user_id: Number(user_id)
        },
        include: {
          reading_list_posts: {
            select: {
              post: true
            }
          }
        }
      }),
      prisma.readingLists.count({ where: {
        user_id: Number(user_id)
      },}),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};