import { create } from './create';
import { getAllFavoritesByUser } from './getAllFavoritesByUser';
import { deleteByPostUser } from './deleteByPostUser';


export const favoriteProvider = {
  create,
  getAllFavoritesByUser,
  deleteByPostUser,
};