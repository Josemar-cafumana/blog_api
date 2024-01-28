import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IProfile } from '../../types';

interface IbodyProps extends IProfile {}

interface IParamsProps  {
  id: number;
}

export const update = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  })),
  body: getSchema<IbodyProps >(yup.object().shape({
    bio: yup.string(),
    birth_date: yup.date(),
    user_id: yup.number().required(),
    media_id: yup.number()
  }))
}));