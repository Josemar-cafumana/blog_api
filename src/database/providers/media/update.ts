import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IMedia } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const update = async (id: number, data: IMedia): Promise<IMedia | Error> => {
  try {
    const media = await prisma.media.update({
      where: {
        id
      },
      data
    });

    return media;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};