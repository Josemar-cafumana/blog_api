import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { $Enums } from '@prisma/client';

interface IQueryProps  {
  page?: number;
  size?: number;
  title?: string;
  status?: string;
  category?: string;
}

export const getMyPosts = Validation((getSchema) => ({
  query: getSchema<IQueryProps >(yup.object().shape({
    page: yup.number().integer(),
    size: yup.number().integer(),
    title: yup.string(),
    status: yup.mixed<$Enums.Status>().oneOf(Object.values($Enums.Status)),
    category: yup.string(),
  }))
}));