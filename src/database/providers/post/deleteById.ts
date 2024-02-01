import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';
import { IPost } from '../../../types';

export const deleteById = async (id: number, user_id: number): Promise<IPost | Error> => {
  try {
    const postExists = await prisma.post.findFirst({
      where: {
        id,
        user_id: Number(user_id)
      }
    });

    if(!postExists) return new ApiError('Post não encontradO', StatusCodes.NOT_FOUND); 

    const post = await prisma.post.delete({
      where: {
        id
      }
    });

    return post;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};