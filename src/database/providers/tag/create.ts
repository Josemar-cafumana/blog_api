import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { ITag } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const create = async (name: string): Promise<ITag | Error> => {
  try {
    const tagAlreadyExist = await prisma.tag.findUnique({
      where: {
        name
      }
    });

    if(tagAlreadyExist) return new ApiError('A tag informada já foi cadastrada', StatusCodes.BAD_REQUEST); 

    const tag = await prisma.tag.create({
      data: {
        name,
      }
    });

    return tag;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};