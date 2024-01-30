import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface IQueryProps  {
  page?: number;
  size?: number;
  title?: string;
  user?: string;
  category?: string;
}

export const getAll = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({
    page: yup.number().integer(),
    size: yup.number().integer(),
    title: yup.string(),
    user: yup.string(),
    category: yup.string(),
  }))
}));