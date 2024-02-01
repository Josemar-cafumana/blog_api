import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IPost } from '../../types';
import { $Enums } from '@prisma/client';

interface IbodyProps extends Omit<IPost, 'media_id' | 'user_id'> {
  media: string;
}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    title:  yup.string().required().min(3),
    content: yup.string().required(),
    status: yup.mixed<$Enums.Status>().oneOf(Object.values($Enums.Status)).required(),
    category_id: yup.number().integer().required(),
    media: yup.string().required().matches(/^data:image\/[a-zA-Z]+;base64,([^\s]+)$/, 'Imagem em base64-encoded inválido'),
  }))
}));