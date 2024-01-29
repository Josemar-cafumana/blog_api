import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { postProvider } from '../../database/providers/post';
import { mediaProvider } from '../../database/providers/media';
import { cloudinaryService } from '../../shared/services/cloudinaryService';

export const deleteById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;
  
  const result = await postProvider.deleteById(Number(id));

  if(result instanceof Error) {
    return next(result);
  }

  // --------------------- Criar fila -----------------------
  // Pegar a media
  const media = await mediaProvider.getById(Number(result.media_id));

  if(media instanceof Error) {
    return next(media);
  }

  // Apagar a media do cloudinary
  const deleteMediaCloudinary = await cloudinaryService.deleteMedia(media.public_id);

  if(deleteMediaCloudinary instanceof Error) {
    return next(deleteMediaCloudinary);
  }

  // Apagar a media do banco de dados
  const deleteMedia = await mediaProvider.deleteById(Number(id));

  if(deleteMedia instanceof Error) {
    return next(deleteMedia);
  }

  return res.json().status(StatusCodes.NO_CONTENT);
};