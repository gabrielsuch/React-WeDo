import * as yup from 'yup';

export const EditValidation = yup.object().shape({
  title: yup.string().required('Campo Obrigatório'),
  category: yup.string().required('Campo Obrigatório'),
  frequency: yup.string().required('Campo Obrigatório').nullable(),
  difficulty: yup.string().required('Campo Obrigatório').nullable(),
});
