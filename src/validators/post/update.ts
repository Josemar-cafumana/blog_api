import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IPost } from '../../types';
import { $Enums } from '@prisma/client';

interface IParamsProps  {
  id: number;
}

interface IbodyProps extends Omit<IPost, 'user_id'> {}

export const update = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  })),
  body: getSchema<IbodyProps >(yup.object().shape({
    title:  yup.string().required().min(3),
    content: yup.string().required(),
    status: yup.mixed<$Enums.Status>().oneOf(Object.values($Enums.Status)).required(),
    category_id: yup.number().integer().required(),
    media_id: yup.number().integer().required(),
  }))
}));