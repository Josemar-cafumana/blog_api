import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface IbodyProps  {
  post_id: number;
  tags: number[];
}

export const tags = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    post_id:yup.number().integer().required(),
    tags: yup.array().of(yup.number().integer().required()).required('Informe um array com ids tags'),
  }))
}));