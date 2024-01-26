import { prisma } from '../../../database';
import { passwordCrypto } from '../../../shared/services';
import { IUser } from '../../../types';

export const signUp = async (name: string, email: string, password: string): Promise<IUser | Error> => {
  try {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if(userAlreadyExist) return new Error('O usuário informado já está cadastrado'); 

    const hashedPassword = await passwordCrypto.hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      }
    });

    return user;
  } catch (error) {
    return new Error('Erro ao cadastrar o registro');
  }
  
};