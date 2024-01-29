import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface IParamsProps  {
  id: number;
}

export const deleteById = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  }))
}));