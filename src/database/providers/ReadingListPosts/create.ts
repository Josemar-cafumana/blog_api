import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IReadingListPosts } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (data: IReadingListPosts): Promise<IReadingListPosts | Error> => {
  try {
    const readingListPostsAlreadyExist = await prisma.readingListPosts.findFirst({
      where: {
        post_id: data.post_id,
        reading_list_id: data.reading_list_id
      }
    });

    if(readingListPostsAlreadyExist) return new ApiError('O Post informado já foi cadastrado', StatusCodes.BAD_REQUEST); 

    const readingListPosts = await prisma.readingListPosts.create({
      data: {
        post_id: data.post_id,
        reading_list_id: data.reading_list_id
      }
    });

    return readingListPosts;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};