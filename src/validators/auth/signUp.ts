import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IbodyProps {}

export const signUp = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({}))
}));