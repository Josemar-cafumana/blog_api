import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IQueryProps  {
  page?: number;
  size?: number;
  title?: string;
}

export const getMyFavorites = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({
    page: yup.number().integer(),
    size: yup.number().integer(),
    title: yup.string(),
  }))
}));