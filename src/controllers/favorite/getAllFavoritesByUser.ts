import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { favoriteProvider } from '../../database/providers/favorite';
import { repaged } from '../../utils/pagination';

export const getAllFavoritesByUser = async (
  req: Request<unknown, unknown, unknown ,{ page?: string; size?: string; user_id?: number; title?: string }>,
  res: Response,
  next: NextFunction
) => {
  const { page, size, user_id, title } = req.query;

  const parsedPage = parseInt(page as string, 10);
  const parsedSize = parseInt(size as string, 10);

  // Verifica se os valores são números válidos, se não, define valores padrão
  const validatedPage = (!isNaN(parsedPage) && parsedPage > 0) ? parsedPage : 1;
  const validatedSize = (!isNaN(parsedSize) && parsedSize > 0) ? parsedSize : 10;

  const result = await favoriteProvider.getAllFavoritesByUser(validatedPage, validatedSize, Number(user_id), title);

  if (result instanceof Error) {
    return next(result);
  }

  const data = repaged(result, validatedPage, validatedSize);

  return res.status(StatusCodes.OK).json(data);
};
