import { $Enums } from '@prisma/client';
import { prisma } from '../..';
import { IPost } from '../../../types';

interface IData {
  data: IPost[];
  total: number;
}

export const getMyPosts = async (
  page: number,
  size: number,
  title: string | undefined,
  user: number,
  status: $Enums.Status | undefined,
  category: string | undefined
): Promise<IData | Error> => {
  try {
    const skip = (page - 1) * size;
    const [data, total] = await Promise.all([
      prisma.post.findMany({
        skip,
        take: size,
        include: {
          user: true,
          category: { select: { name: true } },
          _count: {
            select: {
              comments: true,
              likes: true,
            },
          },
        },
        where: {
          user_id: user,
          ...(title && { title: { contains: title.toLocaleLowerCase() } }),
          ...(status && { status: status }),
          ...(category && {
            category: { name: { contains: category.toLocaleLowerCase() } },
          }),
        },
      }),
      prisma.post.count({
        where: {
          user_id: user,
          ...(title && { title: { contains: title.toLocaleLowerCase() } }),
          ...(status && { status: status }),
          ...(category && {
            category: { name: { contains: category.toLocaleLowerCase() } },
          }),
        },
      }),
    ]);

    return { data, total };
  } catch (error: unknown) {
    return new Error(error as string);
  }
};
