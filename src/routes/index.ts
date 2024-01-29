import { authRouter } from './auth.routes';
import { categoryRouter } from './category.routes';
import { tagRouter } from './tag.routes';
import { profileRouter } from './profile.routes';
import { mediaRouter } from './media.routes';
import { postRouter } from './post.routes';
import { likeRouter } from './like.routes';
import { favoriteRouter } from './favorite.routes';

export const routes = {
  authRouter,
  categoryRouter,
  tagRouter,
  profileRouter,
  mediaRouter,
  postRouter,
  likeRouter,
  favoriteRouter
};