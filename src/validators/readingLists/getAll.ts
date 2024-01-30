import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface IQueryProps  {
  page?: number;
  size?: number;
  user_id: number;
  name?: string;
  is_public?: boolean;
}

export const getAll = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({
    page: yup.number().integer(),
    size: yup.number().integer(),
    user_id: yup.number().integer().required(),
    name: yup.string(),
    is_public: yup.boolean(),
  }))
}));