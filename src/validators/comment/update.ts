import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IComment } from '../../types';

interface IParamsProps  {
  id: number;
}

interface IbodyProps extends IComment {}

export const update = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  })),
  body: getSchema<IbodyProps >(yup.object().shape({
    content: yup.string().strict().required(),
    user_id:yup.number().integer().required(),
    post_id:yup.number().integer().required(),
  }))
}));