import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface IQueryProps  {
  page?: number;
  size?: number;
  name?: string;
  is_public?: boolean;
}

export const getMyReadingLists = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({
    page: yup.number().integer(),
    size: yup.number().integer(),
    name: yup.string(),
    is_public: yup.boolean(),
  }))
}));