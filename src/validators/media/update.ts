import * as yup from 'yup';
import { Validation } from '../../shared/middleware';

interface IParamsProps  {
  id: number;
}

interface IbodyProps {
  media: string;
}
export const update = Validation((getSchema) => ({
  params: getSchema<IParamsProps >(yup.object().shape({
    id: yup.number().required(),
  })),
  body: getSchema<IbodyProps >(yup.object().shape({
    media: yup.string().required().matches(/^data:image\/[a-zA-Z]+;base64,([^\s]+)$/, 'Imagem em base64-encoded inválido'),
  }))
}));