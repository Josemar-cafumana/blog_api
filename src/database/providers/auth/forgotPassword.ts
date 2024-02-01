import { IUser } from '../../../types';
import { prisma } from '../..';
import { jwtService } from '../../../shared/services';
import { ApiError } from '../../../utils/appError';
import { StatusCodes } from 'http-status-codes';

export const forgotPassword = async (email: string) : Promise<IUser  | Error> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    });
    
    if(!user) return new ApiError('Usuário não encontrado', StatusCodes.NOT_FOUND); 
    

    const resetToken = jwtService.resetTokenSignIn(user.email, '5m');
    if(resetToken === 'JWT_SECRET_NOT_FOUND') {
      return new ApiError('Erro ao gerar token de acesso', StatusCodes.INTERNAL_SERVER_ERROR); 
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
  } catch (error : unknown) {
    return new Error(error as string);
  }
};