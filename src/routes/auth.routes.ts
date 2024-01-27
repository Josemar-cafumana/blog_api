import Express from 'express';
import { authController } from '../controllers/auth';
import { authValidator } from '../validators/auth';
import { ensureAuthenticated } from '../shared/middleware';

const authRouter = Express.Router();

authRouter.post('/signin', authValidator.signIn, authController.signIn);
authRouter.post('/signup', authValidator.signUp, authController.signUp);
authRouter.post('/logout',  authController.logout);
authRouter.post('/forgot-password', authValidator.forgotPassword, authController.forgotPassword);
authRouter.post('/reset-password/:email/:token', authValidator.resetPassword, authController.resetPassword);
authRouter.post('/refreshtoken', authValidator.refreshTokenUser, authController.refreshTokenUser);

authRouter.get('/test', ensureAuthenticated, (req, res) => {
  return res.send('j');
});

export { authRouter };