import { StatusCodes } from 'http-status-codes';
import { prisma } from '../..';
import { IProfile } from '../../../types';
import { ApiError } from '../../../utils/appError';
import { convertToDate } from '../../../utils/convertToDate';

export const update = async (id: number, data: IProfile): Promise<IProfile | Error> => {
  try {
    const profileExists = await prisma.profile.findFirst({
      where: {
        id,
        user_id: Number(data.user_id)
      }
    });

    if(!profileExists) return new ApiError('Perfil não encontrado', StatusCodes.NOT_FOUND);

    if(data.media_id) {
      const mediaExists = await prisma.media.findFirst({
        where: {
          id: Number(data.media_id),
        }
      });
  
      if(!mediaExists) return new ApiError('Media não encontrada', StatusCodes.NOT_FOUND);
    }
    
  
    const profile = await prisma.profile.update({
      where: {
        id,
        user_id: Number(data.user_id)
      },
      data: {
        bio: data.bio,
        birth_date: convertToDate(data.birth_date),
        media_id: Number(data.media_id) ,
      }
    });

    return profile;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};