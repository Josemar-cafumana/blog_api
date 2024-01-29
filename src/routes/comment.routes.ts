import Express from 'express';
import { commentController } from '../controllers/comment';
import { commentValidator } from '../validators/comment';
import { ensureAuthenticated } from '../shared/middleware';

const commentRouter = Express.Router();

commentRouter.get('/', ensureAuthenticated, commentValidator.getAllCommentsByPost, commentController.getAllCommentsByPost);
commentRouter.post('/', ensureAuthenticated, commentValidator.create, commentController.create);
commentRouter.put('/:id', ensureAuthenticated, commentValidator.update, commentController.update);
commentRouter.delete('/:id', ensureAuthenticated, commentValidator.deleteById, commentController.deleteById);


export { commentRouter };