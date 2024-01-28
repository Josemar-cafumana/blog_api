import { IUser } from '../../../types';
import { prisma } from '../../../database';
import { passwordCrypto } from '../../../shared/services';
import { ApiError } from '../../../utils/appError';
import { StatusCodes } from 'http-status-codes';

export const signIn = async (email: string, password: string): Promise<IUser  | Error> => {
  try {
    const userAlreadyExist = await prisma.user.findUnique({
      where: {
        email: email
      }
    });

    if(!userAlreadyExist) return new ApiError('Email ou senha incorrectos', StatusCodes.BAD_REQUEST); 

    const matchPassword = await passwordCrypto.verifyPassword(password, userAlreadyExist.password);

    if(!matchPassword) return new ApiError('Email ou senha incorrectos', StatusCodes.BAD_REQUEST);

    return userAlreadyExist;
  } catch (error : unknown) {
    return new Error(error as string);
  }
};