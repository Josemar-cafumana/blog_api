import { IUser } from '../../../types';
import { prisma } from '../..';
import { jwtService, passwordCrypto } from '../../../shared/services';

export const resetPassword = async (email: string, token: string, password: string) : Promise<IUser  | Error> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password_reset_token: token
      }
    });

    if(!user) return new Error('Usuário não encontrado'); 

    const jwtData = jwtService.resetTokenverify(user.password_reset_token!);

    if(jwtData == 'INVALID_TOKEN') {
      return new Error('Token Inválido'); 
    }
  
    if(jwtData == 'JWT_SECRET_NOT_FOUND') {
      return new Error('Erro ao gerar token de acesso'); 
    }

    const hashedPassword = await passwordCrypto.hashPassword(password);

    const newUser = await prisma.user.update({
      where: {
        email: email
      },
      data: {
        password: hashedPassword,
        password_reset_token: null
      }
    });


    return newUser;
  } catch (error) {
    return new Error('Usuário não encontrado');
  }
};