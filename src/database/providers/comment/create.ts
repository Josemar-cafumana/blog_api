import { prisma } from '../..';
import { IComment } from '../../../types';

export const create = async (data: IComment): Promise<IComment | Error> => {
  try {

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