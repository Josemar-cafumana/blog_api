import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { ICategory } from '../../types';

interface IParamsProps  {
  id: number;
}
interface IbodyProps extends ICategory {}

export const update = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  })),
  body: getSchema<IbodyProps >(yup.object().shape({
    name: yup.string().required().min(3).max(191),
  }))
}));