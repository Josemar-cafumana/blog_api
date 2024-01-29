import { create } from './create';
import { getAllLikesPost } from './getAllLikesPost';
import { deleteByPostUser } from './deleteByPostUser';


export const likeProvider = {
  create,
  getAllLikesPost,
  deleteByPostUser,
};