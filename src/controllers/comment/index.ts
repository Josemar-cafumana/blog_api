import { create } from './create';
import { getAllCommentsByPost } from './getAllCommentsByPost';
import { deleteById } from './deleteById';
import { update } from './update';


export const commentController = {
  create,
  getAllCommentsByPost,
  deleteById,
  update
};