import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { mediaProvider } from '../../database/providers/media';
import { cloudinaryService } from '../../shared/services/cloudinaryService';

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  // Pegar a media
  const media = await mediaProvider.getById(Number(id));

  if(media instanceof Error) {
    return next(media);
  }

  // Apagar a media do cloudinary
  const deleteMedia = await cloudinaryService.deleteMedia(media.public_id);

  if(deleteMedia instanceof Error) {
    return next(deleteMedia);
  }

  // Apagar a media do banco de dados
  const result = await mediaProvider.deleteById(Number(id));

  if(result instanceof Error) {
    return next(result);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};