import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IFavorite } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (data: IFavorite): Promise<IFavorite | Error> => {
  try {
    const favoriteAlreadyExist = await prisma.favorite.findUnique({
      where: {
        favorite_id: {
          post_id: Number(data.post_id),
          user_id: Number(data.user_id)
        }
      }
    });

    if(favoriteAlreadyExist) return new ApiError('Item já se encontra nos favoritos', StatusCodes.BAD_REQUEST); 

    const favorite = await prisma.favorite.create({
      data: {
        post_id: Number(data.post_id),
        user_id: Number(data.user_id)
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          }
        }
      }
    });

    return favorite;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};