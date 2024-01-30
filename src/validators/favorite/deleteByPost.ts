import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IFavorite } from '../../types';

interface IbodyProps extends Omit<IFavorite, 'user_id'> {}

export const deleteByPost = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    post_id:yup.number().integer().required(),
  }))
}));