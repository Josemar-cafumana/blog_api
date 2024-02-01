import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IReadingLists } from '../../types';

interface IParamsProps  {
  id: number;
}
interface IbodyProps extends Omit<IReadingLists, 'user_id'> {}

export const update = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  })),
  body: getSchema<IbodyProps >(yup.object().shape({
    name: yup.string().strict().required().min(3).max(191),
    is_public: yup.boolean().required(),
  }))
}));