import { prisma } from '../..';
import { IComment } from '../../../types';

interface IData {
  data: IComment[];
  total: number
}

export const getAllCommentsByPost = async (page: number , size: number , post_id: number): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.comment.findMany({
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
      prisma.comment.count({
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