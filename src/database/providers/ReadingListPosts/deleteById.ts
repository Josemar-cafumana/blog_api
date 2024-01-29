import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ApiError } from '../../../utils/appError';
import { IReadingListPosts } from '../../../types';

export const deleteById = async (data: IReadingListPosts): Promise<number | Error> => {
  try {
    const readingListPostsExists = await prisma.readingListPosts.findUnique({
      where: {
        reading_list_id_post_id: {
          post_id: data.post_id,
          reading_list_id: data.reading_list_id
        }
      }
    });

    if(!readingListPostsExists) return new ApiError('Post não encontrado', StatusCodes.NOT_FOUND); 

    const readingListPosts = await prisma.readingListPosts.delete({
      where: {
        reading_list_id_post_id: {
          post_id: data.post_id,
          reading_list_id: data.reading_list_id
        }
      }
    });

    return readingListPosts.reading_list_id;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};