import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { ITag } from '../../types';


interface IbodyProps extends ITag {}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    name: yup.string().strict().required().min(3).max(191),
  }))
}));