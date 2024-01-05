import * as yup from 'yup';

export const headerProfileValidation = yup.object().shape({
  username: yup.string().required('Campo obrigatório'),
  email: yup.string().email('Email inválido').required('Campo obrigatório'),
});
