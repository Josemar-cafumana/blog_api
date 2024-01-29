import Express from 'express';
import { likeController } from '../controllers/like';
import { likeValidator } from '../validators/like';
import { ensureAuthenticated } from '../shared/middleware';

const likeRouter = Express.Router();

likeRouter.get('/', ensureAuthenticated, likeValidator.getAllLikesByPost, likeController.getAllLikesPost);
likeRouter.post('/', ensureAuthenticated, likeValidator.create, likeController.create);
likeRouter.delete('/delete', ensureAuthenticated, likeValidator.create, likeController.deleteByPostUser);

export { likeRouter };