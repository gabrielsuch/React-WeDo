import * as yup from 'yup';

export const goalsAddValidation = yup.object().shape({
  title: yup.string().required('Campo obrigatório'),
  difficulty: yup.string().required('Campo obrigatório').nullable(),
});
