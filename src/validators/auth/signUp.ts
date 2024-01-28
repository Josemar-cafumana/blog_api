import * as yup from 'yup';
import { Validation } from '../../shared/middleware';
import { IUser } from '../../types';


interface IbodyProps extends IUser {}

export const signUp = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    name: yup.string().strict().required().min(3).max(191),
    email: yup.string().required().email().max(191),
    password: yup.string().required().min(6), 
  }))
}));