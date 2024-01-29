import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { mediaProvider } from '../../database/providers/media';
import { cloudinaryService } from '../../shared/services/cloudinaryService';

export const create = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { media } = req.body;

  const upload = await cloudinaryService.uploadMedia(media);

  if(upload instanceof Error) {
    return next(upload);
  }

  const result = await mediaProvider.create(upload);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};