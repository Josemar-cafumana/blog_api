import Express from 'express';
import { categoryController } from '../controllers/category';
import { categoryValidator } from '../validators/category';
import { ensureAuthenticated } from '../shared/middleware';

const categoryRouter = Express.Router();

categoryRouter.get('/', ensureAuthenticated, categoryValidator.getAll, categoryController.getAll);
categoryRouter.post('/', ensureAuthenticated, categoryValidator.create, categoryController.create);
categoryRouter.get('/:id', ensureAuthenticated, categoryValidator.getById, categoryController.getById);
categoryRouter.put('/:id', ensureAuthenticated, categoryValidator.update, categoryController.update);
categoryRouter.delete('/:id', ensureAuthenticated, categoryValidator.deleteById, categoryController.deleteById);


export { categoryRouter };