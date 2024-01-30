import { prisma } from '../..';
import { IReadingLists } from '../../../types';

interface IData {
  data: IReadingLists[];
  total: number
}

export const getAll = async (page: number , size: number, user_id: number, name: string | undefined, is_public: string | undefined ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;

    const [data, total] = await Promise.all([
      prisma.readingLists.findMany({
        skip,
        take: size,
        where: {
          user_id: Number(user_id),
          ...(name && { name: { contains: name.toLocaleLowerCase() } }),
          ...(is_public && { is_public: Boolean(JSON.parse(is_public.toLowerCase()))  }),
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
          user_id: Number(user_id),
          ...(name && { name: { contains: name.toLocaleLowerCase() } }),
          ...(is_public && { is_public: Boolean(JSON.parse(is_public.toLowerCase()))  }),
        },
      }),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};