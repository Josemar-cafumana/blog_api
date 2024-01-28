import { NextFunction, Request, Response } from 'express';
import { ApiError } from '../../utils/appError';

export const errorHandler = (
  err: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof ApiError) {
    // Gerar um logs do erro
    console.error(err);

    return res.status(err.statusCode).json({
      errors: {
        message: err.message,
      },
    });
  }

  // Gerar um logs do erro
  console.error(err);
  return res.status(500).json({
    errors: {
      message: 'Algo correu mal, por favor contacte o administrador',
    },
  });
};
