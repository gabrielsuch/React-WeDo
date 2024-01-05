import * as yup from 'yup';

export const groupEditValidation = yup
  .object({
    name: yup.string().required('Campo Obrigatório'),
    description: yup.string().required('Campo Obrigatório'),
    category: yup.string().required('Campo Obrigatório'),
  })
  .required();
