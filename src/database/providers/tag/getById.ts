import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ITag } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const getById = async (id: number): Promise<ITag | Error> => {
  try {
    const tag = await prisma.tag.findFirst({
      where: {
        id
      }
    });

    if(!tag) return new ApiError('Tag não encontrada', StatusCodes.NOT_FOUND); 

    return tag;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};