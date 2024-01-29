import { prisma } from '../..';
import { ILike } from '../../../types';

interface IData {
  data: ILike[];
  total: number
}

export const getAllLikesPost = async (page: number , size: number , post_id: number): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.like.findMany({
        skip,
        take: size,
        where: {
          post_id: Number(post_id)
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
            }
          }
        }
      }),
      prisma.like.count({
        where: {
          post_id: Number(post_id)
        }
      }),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};