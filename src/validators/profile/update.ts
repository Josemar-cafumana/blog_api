import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IProfile } from '../../types';

interface IbodyProps extends IProfile {}

interface IParamsProps  {
  id: number;
}
//  bio: yup.string().nullable().notRequired().matches(/[a-zA-Z]+\d+[a-zA-Z]*|\d+[a-zA-Z]+[a-zA-Z]*/, 'Formato inválido'),

export const update = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  })),
  body: getSchema<IbodyProps >(yup.object().shape({
    bio: yup.string().strict().nullable(),
    birth_date: yup.date().nullable(),
    user_id: yup.number().integer().required(),
    media_id: yup.number().integer()
  }))
}));