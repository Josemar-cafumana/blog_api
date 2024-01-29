import { prisma } from '../..';
import { IPost } from '../../../types';


export const create = async (data: IPost): Promise<IPost | Error> => {
  try {
 
    const post = await prisma.post.create({
      data: {
        title: data.title,
        content: data.content,
        category_id: Number(data.category_id),
        user_id: Number(data.user_id),
        status: data.status,
        media_id: Number(data.media_id)
      }
    });

    return post;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};