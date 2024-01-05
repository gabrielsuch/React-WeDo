import * as yup from 'yup';

export const groupsCreateValidation = yup
  .object({
    name: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório'),
    category: yup.string().required('Campo obrigatório'),
  })
  .required();
