import { StatusCodes } from 'http-status-codes';
import { prisma } from '../../../database';
import { passwordCrypto } from '../../../shared/services';
import { IUser } from '../../../types';
import { ApiError } from '../../../utils/appError';

export const signUp = async (name: string, email: string, password: string): Promise<IUser | Error> => {
  try {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if(userAlreadyExist) return new ApiError('O usuário informado já está cadastrado', StatusCodes.BAD_REQUEST); 

    const hashedPassword = await passwordCrypto.hashPassword(password);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        profile: {
          create: {
            bio: null
          }
        }
      },
      
    });

    return user;
  } catch (error : unknown) {
    return new Error(error as string);
  }
  
};