import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';

export const deleteById = async (
  id: number,
  user_id: number
): Promise<number | Error> => {
  try {
    const commentExists = await prisma.comment.findFirst({
      where: {
        id,
      },
      include: {
        post: {
          select: {
            user_id: true,
          },
        },
      },
    });

    if (!commentExists)
      return new ApiError('Comentário não encontrado', StatusCodes.NOT_FOUND);

    if (
      user_id !== Number(commentExists.user_id ||
      user_id !== commentExists.post.user_id)
    )
      return new ApiError('Permissão negada', StatusCodes.UNAUTHORIZED);
      
    const comment = await prisma.comment.delete({
      where: {
        id,
      },
    });

    return comment.id;
  } catch (error: unknown) {
    return new Error(error as string);
  }
};
