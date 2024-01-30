import { prisma } from '../..';
import { IFavorite } from '../../../types';

interface IData {
  data: IFavorite[];
  total: number
}

export const getMyFavorites = async (page: number , size: number , user_id: number, title: string | undefined): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.favorite.findMany({
        skip,
        take: size,
        where: {
          user_id: Number(user_id),
          ...(title && { post: { title: { contains: title.toLocaleLowerCase() } } }),
        },
        include: {
          post: true
        }
      }),
      prisma.favorite.count({
        where: {
          user_id: Number(user_id),
          ...(title && { post: { title: { contains: title.toLocaleLowerCase() } } }),
        }
      }),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};