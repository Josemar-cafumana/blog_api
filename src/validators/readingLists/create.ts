import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IReadingLists } from '../../types';

interface IbodyProps extends Omit<IReadingLists, 'user_id'> {}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    name: yup.string().strict().required().min(3).max(191),
    is_public: yup.boolean().required(),
  }))
}));