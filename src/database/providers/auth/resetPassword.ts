import { IUser } from '../../../types';
import { prisma } from '../..';
import { jwtService, passwordCrypto } from '../../../shared/services';
import { ApiError } from '../../../utils/appError';
import { StatusCodes } from 'http-status-codes';

export const resetPassword = async (email: string, token: string, password: string) : Promise<IUser  | Error> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      }
    });

    if(!user) return new ApiError('Usuário não encontrado', StatusCodes.NOT_FOUND); 

    const jwtData = jwtService.resetTokenverify(user.password_reset_token!);

    if(jwtData == 'INVALID_TOKEN') {
      return new ApiError('Token Inválido', StatusCodes.BAD_REQUEST); 
    }
  
    if(jwtData == 'JWT_SECRET_NOT_FOUND') {
      return new ApiError('Erro ao gerar token de reset', StatusCodes.INTERNAL_SERVER_ERROR); 
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
  } catch (error : unknown) {
    return new Error(error as string);
  }
};