import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IComment } from '../../types';

interface IbodyProps extends IComment {}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    content: yup.string().strict().required(),
    user_id:yup.number().integer().required(),
    post_id:yup.number().integer().required(),
  }))
}));