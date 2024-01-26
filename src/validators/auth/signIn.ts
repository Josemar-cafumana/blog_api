import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IUser } from '../../types';


interface IbodyProps extends Omit<IUser, 'name'> {}

export const signIn = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    email: yup.string().required().email().max(191),
    password: yup.string().required().min(6), 
  }))
}));