import { create } from './create';
import { getAllCommentsByPost } from './getAllCommentsByPost';
import { update } from './update';
import { deleteById } from './deleteById';


export const commentValidator = {
  create,
  getAllCommentsByPost,
  update,
  deleteById,
};