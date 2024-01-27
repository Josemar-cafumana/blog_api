import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface IQueryProps  {}

export const getAll = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({}))
}));