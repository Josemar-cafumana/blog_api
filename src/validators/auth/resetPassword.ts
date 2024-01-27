import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IbodyProps {
  password: string;
}

interface IParamsProps {
  email: string;
}


export const resetPassword = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    password: yup.string().required().min(6), 
  })),
  params: getSchema<IParamsProps >(yup.object().shape({
    email: yup.string().required().email().max(191),
    token: yup.string().required(),
  })),
}));