import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IReadingListPosts } from '../../types';

interface IbodyProps extends IReadingListPosts {}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    reading_list_id: yup.number().integer().required(),
    post_id: yup.number().integer().required(),
  }))
}));