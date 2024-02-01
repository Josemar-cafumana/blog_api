import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { readingListsProvider } from '../../database/providers/readingLists';
import { repaged } from '../../utils/pagination';

interface AuthenticatedRequest
  extends Request<unknown, unknown, unknown ,{ page?: string; size?: string; name?: string | undefined; is_public?: string | undefined }> {
  user?: number;
}

export const getMyReadingLists = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { page, size, name, is_public } = req.query;

  const parsedPage = parseInt(page as string, 10);
  const parsedSize = parseInt(size as string, 10);

  // Verifica se os valores são números válidos, se não, define valores padrão
  const validatedPage = (!isNaN(parsedPage) && parsedPage > 0) ? parsedPage : 1;
  const validatedSize = (!isNaN(parsedSize) && parsedSize > 0) ? parsedSize : 10;

  const result = await readingListsProvider.getMyReadingLists(validatedPage, validatedSize, name, is_public, Number(req.user!));

  if (result instanceof Error) {
    return next(result);
  }

  const data = repaged(result, validatedPage, validatedSize);

  return res.status(StatusCodes.OK).json(data);
};
