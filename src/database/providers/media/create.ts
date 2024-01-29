import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IMedia } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (data: IMedia): Promise<IMedia | Error> => {
  try {
    const mediaAlreadyExist = await prisma.media.findFirst({
      where: {
        public_id: data.public_id
      }
    });

    if(mediaAlreadyExist) return new ApiError('A Media informada já foi cadastrada', StatusCodes.BAD_REQUEST); 

    const media = await prisma.media.create({
      data
    });

    return media;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};