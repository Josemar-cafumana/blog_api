import Express from 'express';
import { favoriteController } from '../controllers/favorite';
import { favoriteValidator } from '../validators/favorite';
import { ensureAuthenticated } from '../shared/middleware';

const favoriteRouter = Express.Router();

favoriteRouter.get('/', ensureAuthenticated, favoriteValidator.getAllFavoritesByUser, favoriteController.getAllFavoritesByUser);
favoriteRouter.post('/', ensureAuthenticated, favoriteValidator.create, favoriteController.create);
favoriteRouter.delete('/delete', ensureAuthenticated, favoriteValidator.create, favoriteController.deleteByPostUser);

export { favoriteRouter };