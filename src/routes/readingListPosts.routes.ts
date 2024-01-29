import Express from 'express';
import { ReadingListPostsController } from '../controllers/ReadingListPosts';
import { ReadingListPostsValidator } from '../validators/readingListPosts';
import { ensureAuthenticated } from '../shared/middleware';

const readingListPostsRouter = Express.Router();

readingListPostsRouter.post('/', ensureAuthenticated, ReadingListPostsValidator.create, ReadingListPostsController.create);
readingListPostsRouter.delete('/delete', ensureAuthenticated, ReadingListPostsValidator.create, ReadingListPostsController.deleteById);


export { readingListPostsRouter };