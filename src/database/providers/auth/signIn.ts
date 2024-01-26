import { IUser } from '../../../types';
import { prisma } from '../../../database';
import { passwordCrypto } from '../../../shared/services';

export const signIn = async (email: string, password: string): Promise<IUser  | Error> => {
  try {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if(!userAlreadyExist) return new Error('Email ou senha incorrectos'); 

    const matchPassword = await passwordCrypto.verifyPassword(password, userAlreadyExist.password);

    if(!matchPassword) return new Error('Email ou senha incorrectos'); 

    return userAlreadyExist;
  } catch (error) {
    return new Error('Erro ao logar o usuário');
  }
};