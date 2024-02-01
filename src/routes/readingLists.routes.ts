import Express from 'express';
import { readingListsController } from '../controllers/readingLists';
import { ReadingListsValidator } from '../validators/readingLists';
import { ensureAuthenticated } from '../shared/middleware';

const readingListsRouter = Express.Router();

readingListsRouter.get('/', ensureAuthenticated, ReadingListsValidator.getAll, readingListsController.getAll);
readingListsRouter.get('/me', ensureAuthenticated, ReadingListsValidator.getMyReadingLists, readingListsController.getMyReadingLists);
readingListsRouter.post('/', ensureAuthenticated, ReadingListsValidator.create, readingListsController.create);
readingListsRouter.get('/:id', ensureAuthenticated, ReadingListsValidator.getById, readingListsController.getById);
readingListsRouter.put('/:id', ensureAuthenticated, ReadingListsValidator.update, readingListsController.update);
readingListsRouter.delete('/:id', ensureAuthenticated, ReadingListsValidator.deleteById, readingListsController.deleteById);


export { readingListsRouter };