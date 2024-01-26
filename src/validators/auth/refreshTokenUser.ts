import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IbodyProps  {
  refresh_token: string;
}

export const refreshTokenUser = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    refresh_token: yup.string().required(),
  }))
}));