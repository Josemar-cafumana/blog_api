import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IFavorite } from '../../types';

interface IbodyProps extends IFavorite {}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    user_id:yup.number().integer().required(),
    post_id:yup.number().integer().required(),
  }))
}));