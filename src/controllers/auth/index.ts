import { signUp } from './signUp';
import { update } from './update';
import { logout } from './logout';
import { signIn } from './signIn';
import { resetPassword } from './resetPassword';
import { refreshTokenUser } from './refreshTokenUser';


export const authController = {
  signUp,
  update,
  logout,
  signIn,
  resetPassword,
  refreshTokenUser
};