import Express from 'express';
import { profileController } from '../controllers/profile';
import { profileValidator } from '../validators/profile';
import { ensureAuthenticated } from '../shared/middleware';

const profileRouter = Express.Router();

profileRouter.get('/', ensureAuthenticated, profileValidator.getAll, profileController.getAll);
profileRouter.get('/:id', ensureAuthenticated, profileValidator.getById, profileController.getById);
profileRouter.put('/:id', ensureAuthenticated, profileValidator.update, profileController.update);

export { profileRouter };