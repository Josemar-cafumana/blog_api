import Express from 'express';
import { favoriteController } from '../controllers/favorite';
import { favoriteValidator } from '../validators/favorite';
import { ensureAuthenticated } from '../shared/middleware';

const favoriteRouter = Express.Router();

favoriteRouter.get('/me', ensureAuthenticated, favoriteValidator.getMyFavorites, favoriteController.getMyFavorites);
favoriteRouter.post('/', ensureAuthenticated, favoriteValidator.create, favoriteController.create);
favoriteRouter.delete('/delete', ensureAuthenticated, favoriteValidator.deleteByPost, favoriteController.deleteByPost);

export { favoriteRouter };