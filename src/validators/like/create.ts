import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { ILike } from '../../types';

interface IbodyProps extends Omit<ILike, 'user_id'> {}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    post_id:yup.number().integer().required(),
  }))
}));