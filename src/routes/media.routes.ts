import Express from 'express';
import { mediaController } from '../controllers/media';
import { mediaValidator } from '../validators/media';
import { ensureAuthenticated } from '../shared/middleware';

const mediaRouter = Express.Router();

mediaRouter.get('/', ensureAuthenticated, mediaValidator.getAll, mediaController.getAll);
mediaRouter.post('/', ensureAuthenticated, mediaValidator.create, mediaController.create);
mediaRouter.get('/:id', ensureAuthenticated, mediaValidator.getById, mediaController.getById);
mediaRouter.put('/:id', ensureAuthenticated, mediaValidator.update, mediaController.update);
mediaRouter.delete('/:id', ensureAuthenticated, mediaValidator.deleteById, mediaController.deleteById);


export { mediaRouter };