import { signUp } from './signUp';
import { resetPassword } from './resetPassword';
import { signIn } from './signIn';
import { forgotPassword } from './forgotPassword';
import { refreshTokenUser } from './refreshTokenUser';


export const authController = {
  signUp,
  resetPassword,
  signIn,
  forgotPassword,
  refreshTokenUser
};