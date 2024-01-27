import { IUser } from '../../../types';
import { prisma } from '../..';
import { jwtService } from '../../../shared/services';

export const forgotPassword = async (email: string) : Promise<IUser  | Error> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    
    if(!user) return new Error('Usuário não encontrado'); 
    

    const resetToken = jwtService.resetTokenSignIn(user.email, '60s');
    if(resetToken === 'JWT_SECRET_NOT_FOUND') {
      return new Error('Erro ao gerar token de acesso'); 
    }

    const newUser = await prisma.user.update({
      where: {
        email: email
      },
      data: {
        password_reset_token: resetToken
      }
    });


    return newUser;
  } catch (error) {
    console.log('error aqui', error);
    return new Error('Usuário não encontrado');
  }
};