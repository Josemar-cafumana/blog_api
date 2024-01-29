import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IComment } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (data: IComment, user_id: number): Promise<IComment | Error> => {
  try {
    if(user_id !== Number(data.user_id)) return new ApiError('Permissão negada', StatusCodes.UNAUTHORIZED); 

    const comment = await prisma.comment.create({
      data: {
        post_id: Number(data.post_id),
        user_id: Number(data.user_id),
        content: data.content
      },
    });

    return comment;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};