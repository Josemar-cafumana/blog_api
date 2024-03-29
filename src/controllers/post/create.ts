import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { postProvider } from '../../database/providers/post';
import { cloudinaryService } from '../../shared/services/cloudinaryService';
import { mediaProvider } from '../../database/providers/media';

interface AuthenticatedRequest
  extends Request {
  user?: number;
}
export const create = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  const { media } = req.body;

  const upload = await cloudinaryService.uploadMedia(media);

  if(upload instanceof Error) {
    return next(upload);
  }

  const createMedia = await mediaProvider.create(upload);

  if(createMedia instanceof Error) {
    return next(createMedia);
  }
  
  const result = await postProvider.create({...req.body, media_id: createMedia.id, user_id: req.user!});

  if(result instanceof Error) {
    return next(result);
  }

  return res.json({ data: result }).status(StatusCodes.CREATED);
};