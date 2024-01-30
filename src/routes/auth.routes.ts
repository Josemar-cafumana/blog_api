import Express from 'express';
import { authController } from '../controllers/auth';
import { authValidator } from '../validators/auth';

const authRouter = Express.Router();

authRouter.post('/signin', authValidator.signIn, authController.signIn);
authRouter.post('/signup', authValidator.signUp, authController.signUp);
authRouter.post('/forgot-password', authValidator.forgotPassword, authController.forgotPassword);
authRouter.post('/reset-password/:email/:token', authValidator.resetPassword, authController.resetPassword);
authRouter.post('/refreshtoken', authValidator.refreshTokenUser, authController.refreshTokenUser);

export { authRouter };