import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { commentProvider } from '../../database/providers/comment';
import { repaged } from '../../utils/pagination';

export const getAllCommentsByPost = async (
  req: Request<unknown, unknown, unknown ,{ page?: string; size?: string, post_id?: number }>,
  res: Response,
  next: NextFunction
) => {
  const { page, size, post_id } = req.query;

  const parsedPage = parseInt(page as string, 10);
  const parsedSize = parseInt(size as string, 10);

  // Verifica se os valores são números válidos, se não, define valores padrão
  const validatedPage = (!isNaN(parsedPage) && parsedPage > 0) ? parsedPage : 1;
  const validatedSize = (!isNaN(parsedSize) && parsedSize > 0) ? parsedSize : 10;

  const result = await commentProvider.getAllCommentsByPost(validatedPage, validatedSize, Number(post_id));

  if (result instanceof Error) {
    return next(result);
  }

  const data = repaged(result, validatedPage, validatedSize);

  return res.status(StatusCodes.OK).json(data);
};
