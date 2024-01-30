import { create } from './create';
import { getAll } from './getAll';
import { getById } from './getById';
import { update } from './update';
import { deleteById } from './deleteById';
import { getMyPosts } from './getMyPosts';
import { tags } from './tags';


export const postProvider = {
  create,
  getAll,
  getById,
  update,
  deleteById,
  getMyPosts,
  tags
};