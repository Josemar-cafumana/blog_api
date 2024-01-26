import Express from 'express';
import { authController } from '../controllers/auth';
import { authValidator } from '../validators/auth';

const authRouter = Express.Router();

authRouter.post('/signin', authValidator.signIn, authController.signIn);
authRouter.post('/signup', authValidator.signUp, authController.signUp);
authRouter.post('/logout',  authController.logout);
authRouter.post('/reset', authValidator.resetPassword, authController.resetPassword);
authRouter.put('/update', authValidator.update, authController.update);
authRouter.post('/refreshtoken', authValidator.refreshTokenUser, authController.refreshTokenUser);

export { authRouter };