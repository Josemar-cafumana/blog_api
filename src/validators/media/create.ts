import * as yup from 'yup';
import { Validation } from '../../shared/middleware';


interface IbodyProps {
  media: string;
}

export const create = Validation((getSchema) => ({
  body: getSchema<IbodyProps >(yup.object().shape({
    media: yup.string().required().matches(/^data:image\/[a-zA-Z]+;base64,([^\s]+)$/, 'Imagem em base64-encoded inválido'),
  }))
}));