import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IPost } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const getById = async (id: number): Promise<IPost | Error> => {
  try {
    const post = await prisma.post.findFirst({
      where: {
        id
      },
      include: {
        media: {
          select: {
            id: true,
            public_id: true,
            resource_type: true,
            url: true
          }
        },
        category: {
          select: {
            id: true,
            name: true
          }
        },
        tags: {
          select: {
            id: true,
            name: true
          }
        },
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        _count: {
          select: {
            likes: true,
            comments: true,
          }
        }

      }
    });

    if(!post) return new ApiError('Post não encontrado', StatusCodes.NOT_FOUND); 

    return post;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};