import { signUp } from './signUp';
import { update } from './update';
import { signIn } from './signIn';
import { resetPassword } from './resetPassword';
import { refreshTokenUser } from './refreshTokenUser';

export const authValidator = {
  signUp,
  update,
  signIn,
  resetPassword,
  refreshTokenUser
};