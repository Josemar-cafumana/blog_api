import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { favoriteProvider } from '../../database/providers/favorite';
import { repaged } from '../../utils/pagination';

interface AuthenticatedRequest
  extends Request<unknown, unknown, unknown ,{ page?: string; size?: string; title?: string }> {
  user?: number;
}
export const getMyFavorites = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { page, size, title } = req.query;

  const parsedPage = parseInt(page as string, 10);
  const parsedSize = parseInt(size as string, 10);

  // Verifica se os valores são números válidos, se não, define valores padrão
  const validatedPage = (!isNaN(parsedPage) && parsedPage > 0) ? parsedPage : 1;
  const validatedSize = (!isNaN(parsedSize) && parsedSize > 0) ? parsedSize : 10;

  const result = await favoriteProvider.getMyFavorites(validatedPage, validatedSize, Number(req.user), title);

  if (result instanceof Error) {
    return next(result);
  }

  const data = repaged(result, validatedPage, validatedSize);

  return res.status(StatusCodes.OK).json(data);
};
