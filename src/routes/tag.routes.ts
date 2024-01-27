import Express from 'express';
import { tagController } from '../controllers/tag';
import { tagValidator } from '../validators/tag';
import { ensureAuthenticated } from '../shared/middleware';

const tagRouter = Express.Router();

tagRouter.get('/', ensureAuthenticated, tagValidator.getAll, tagController.getAll);
tagRouter.post('/', ensureAuthenticated, tagValidator.create, tagController.create);
tagRouter.get('/:id', ensureAuthenticated, tagValidator.getById, tagController.getById);
tagRouter.put('/:id', ensureAuthenticated, tagValidator.update, tagController.update);
tagRouter.delete('/:id', ensureAuthenticated, tagValidator.deleteById, tagController.deleteById);


export { tagRouter };