import { prisma } from '../..';
import { IProfile } from '../../../types';

interface IData {
  data: IProfile[];
  total: number
}

export const getAll = async (page: number , size: number, name: string | undefined ): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.profile.findMany({
        skip,
        take: size,
        where: {
          ...(name && { user: { name: { contains: name.toLocaleLowerCase() } } }),
        },
        include: {
          media: true,
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              createdAt: true
            }
          }
        }
      }),
      prisma.profile.count({
        where: {
          ...(name && { user: { name: { contains: name.toLocaleLowerCase() } } }),
        },
      }),
    ]);

    return { data, total };
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};