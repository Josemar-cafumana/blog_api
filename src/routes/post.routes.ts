import Express from 'express';
import { postController } from '../controllers/post';
import { postValidator } from '../validators/post';
import { ensureAuthenticated } from '../shared/middleware';

const postRouter = Express.Router();

postRouter.get('/', ensureAuthenticated, postValidator.getAll, postController.getAll);
postRouter.post('/', ensureAuthenticated, postValidator.create, postController.create);
postRouter.get('/:id', ensureAuthenticated, postValidator.getById, postController.getById);
postRouter.put('/:id', ensureAuthenticated, postValidator.update, postController.update);
postRouter.delete('/:id', ensureAuthenticated, postValidator.deleteById, postController.deleteById);


export { postRouter };