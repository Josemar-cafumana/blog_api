import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IQueryProps  {
  page?: number;
  size?: number;
  post_id: number;
}

export const getAllCommentsByPost = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({
    page: yup.number().integer(),
    size: yup.number().integer(),
    post_id: yup.number().integer().required(),
  }))
}));