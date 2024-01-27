import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IbodyProps {
  email: string;
}

export const forgotPassword = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    email: yup.string().email().required()
  }))
}));