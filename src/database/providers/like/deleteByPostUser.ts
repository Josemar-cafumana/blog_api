import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';
import { ILike } from '../../../types';

export const deleteByPostUser = async (data: ILike): Promise<number | Error> => {
  try {
    const likeExists = await prisma.like.findFirst({
      where: {
        post_id: Number(data.post_id),
        user_id: Number(data.user_id)
      }
    });

    if(!likeExists) return new ApiError('Like não encontrado', StatusCodes.NOT_FOUND); 

    const like = await prisma.like.delete({
      where: {
        like_id: {
          post_id: Number(data.post_id),
          user_id: Number(data.user_id)
        }
      }
    });

    return like.user_id;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};