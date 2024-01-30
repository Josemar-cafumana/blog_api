import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';
import { IFavorite } from '../../../types';

export const deleteByPost = async (data: IFavorite): Promise<number | Error> => {
  try {
    const favoriteExists = await prisma.favorite.findFirst({
      where: {
        post_id: Number(data.post_id),
        user_id: Number(data.user_id)
      }
    });

    if(!favoriteExists) return new ApiError('Favorito não encontrado', StatusCodes.NOT_FOUND); 

    const favorite = await prisma.favorite.delete({
      where: {
        favorite_id: {
          post_id: Number(data.post_id),
          user_id: Number(data.user_id)
        }
      }
    });

    return favorite.user_id;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};