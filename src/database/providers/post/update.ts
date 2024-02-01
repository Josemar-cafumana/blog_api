import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IPost } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const update = async (id: number, data: IPost): Promise<IPost | Error> => {
  try {
    const postExists = await prisma.post.findFirst({
      where: {
        id,
        user_id: data.user_id
      }
    });

    if(!postExists) return new ApiError('Post não encontrado', StatusCodes.NOT_FOUND); 

    const post = await prisma.post.update({
      where: {
        id
      },
      data: {
        title: data.title,
        content: data.content,
        category_id: Number(data.category_id),
        user_id: Number(data.user_id),
        status: data.status,
        media_id: Number(postExists.media_id)
      }
    });

    return post;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};