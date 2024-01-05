import * as yup from 'yup';

export const LoginValidation = yup
  .object({
    username: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
  })
  .required();
