import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IQueryProps  {
  page?: number;
  size?: number;
  user_id: number;
}

export const getAllFavoritesByUser = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({
    page: yup.number().integer(),
    size: yup.number().integer(),
    user_id: yup.number().integer().required(),
  }))
}));