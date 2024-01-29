import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ILike } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (data: ILike): Promise<ILike | Error> => {
  try {
    const likeAlreadyExist = await prisma.like.findUnique({
      where: {
        like_id: {
          post_id: Number(data.post_id),
          user_id: Number(data.user_id)
        }
      }
    });

    if(likeAlreadyExist) return new ApiError('Item já se encontra curtido', StatusCodes.BAD_REQUEST); 

    const like = await prisma.like.create({
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

    return like;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};