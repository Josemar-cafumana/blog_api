import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { mediaProvider } from '../../database/providers/media';
import { cloudinaryService } from '../../shared/services/cloudinaryService';

export const update = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  // Pegar a media
  const mediaExists = await mediaProvider.getById(Number(id));

  if(mediaExists instanceof Error) {
    return next(mediaExists);
  }

  // Apagar a media do cloudinary
  const deleteMedia = await cloudinaryService.deleteMedia(mediaExists.public_id);

  if(deleteMedia instanceof Error) {
    return next(deleteMedia);
  }

  // Upload da media nova
  const { media } = req.body;

  const upload = await cloudinaryService.uploadMedia(media);

  if(upload instanceof Error) {
    return next(upload);
  }
  
  const result = await mediaProvider.update(Number(id), upload);

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.OK);
};