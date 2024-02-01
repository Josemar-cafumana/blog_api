import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IComment } from '../../types';

interface IbodyProps extends Omit<IComment, 'user_id'> {}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    content: yup.string().strict().required(),
    post_id:yup.number().integer().required(),
  }))
}));