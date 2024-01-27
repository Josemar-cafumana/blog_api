import { signUp } from './signUp';
import { resetPassword } from './resetPassword';
import { signIn } from './signIn';
import { forgotPassword } from './forgotPassword';
import { refreshTokenUser } from './refreshTokenUser';

export const authValidator = {
  signUp,
  resetPassword,
  signIn,
  forgotPassword,
  refreshTokenUser
};