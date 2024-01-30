import { DeleteApiResponse } from 'cloudinary';
import { cloudinary } from '../../utils/cloudinary';
import { IMedia } from '../../types';

const uploadMedia = async (media: string): Promise<IMedia | Error> => {
  try {
    const upload = await cloudinary.uploader.upload(media, { use_filename: true,
      unique_filename: false });

    return {
      public_id: upload.public_id,
      resource_type: upload.resource_type,
      url: upload.secure_url
    };
  } catch (error: unknown) {
    return new Error(error as string);
  }
};

const deleteMedia = async (mediaId: string): Promise<DeleteApiResponse> => {
  try {
    const deletionResult = await cloudinary.uploader.destroy(mediaId);
    return deletionResult;
  } catch (error: unknown) {
    throw new Error(error as string);
  }
};

export const cloudinaryService = {
  uploadMedia,
  deleteMedia
};