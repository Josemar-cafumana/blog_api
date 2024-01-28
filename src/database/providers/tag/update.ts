import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ITag } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const update = async (id: number, data: ITag): Promise<ITag | Error> => {
  try {
    const tagExists = await prisma.tag.findFirst({
      where: {
        id
      }
    });

    if(!tagExists) return new ApiError('Tag não encontrada', StatusCodes.NOT_FOUND); 

    const tag = await prisma.tag.update({
      where: {
        id
      },
      data: {
        name: data.name
      }
    });

    return tag;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};