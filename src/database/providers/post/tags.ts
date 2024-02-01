import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IPost } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const tags = async (post_id: number, tags: number[], user_id: number): Promise<IPost | Error> => {
  try {
    const postExists = await prisma.post.findFirst({
      where: {
        id: Number(post_id),
        user_id: Number(user_id)
      }
    });

    if(!postExists) return new ApiError('Post não encontrado', StatusCodes.NOT_FOUND); 

    const insertTags =  tags.map(tag => ({ id: Number(tag) }));

    const post = await prisma.post.update({
      where: {
        id: Number(post_id)
      },
      data: {
        tags: {
          set: insertTags
        }
      }
    });

    return post;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};