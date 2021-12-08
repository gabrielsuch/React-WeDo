import {
  Container,
  LeftSide,
  RightSide,
  Box,
  CenterForm,
  Form,
  Button,
  AlreadyRegistered,
  DivFlower,
} from './style';
import logoSignup from '../../assets/logoSignup.png';
import Flowers from '../../assets/Flowers.png';
import api from '../../services/api';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { Input, InputPassword } from '../../components/Input';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

export const Signup = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    username: yup.string().required('Campo obrigatório'),
    email: yup.string().required('Campo obrigatório').email('Email inválido'),
    password: yup
      .string()
      .min(6, 'No mínimo 6 caracteres')
      .required('Campo obrigatório'),
    confirmPassword: yup
      .string()
      .required('Campo obrigatório')
      .oneOf([yup.ref('password')], 'AS senhas devem ser iguais'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const sendRegister = (data) => {
    const newData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    api
      .post('/users/', newData)
      .then((response) => {
        toast.success('Conta Criada com Sucesso!');
        history.push('/');
      })
      .catch((err) => {
        toast.error('Erro ao Criar Conta!');
        console.log(err);
      });
  };

  return (
    <>
      <Container>
        <LeftSide>
          <img src={logoSignup} alt="LogoSignUp" />
        </LeftSide>
        <RightSide>
          <Box>
            <CenterForm>
              <Form onSubmit={handleSubmit(sendRegister)}>
                <Input
                  placeholder="Username"
                  register={register}
                  name="username"
                  errors={errors}
                />
                <Input
                  placeholder="Email"
                  register={register}
                  name="email"
                  errors={errors}
                />
                <InputPassword
                  placeholder="Senha"
                  register={register}
                  name="password"
                  errors={errors}
                />
                <InputPassword
                  placeholder="Confirmar senha"
                  register={register}
                  name="confirmPassword"
                  errors={errors}
                />
                <Button type="submit">Cadastrar</Button>
                <AlreadyRegistered>
                  Já possui uma conta?{' '}
                  <span onClick={() => history.push('/')}>Faça login</span>
                </AlreadyRegistered>
              </Form>
            </CenterForm>
            <DivFlower>
              <img src={Flowers} alt="Flower" />
            </DivFlower>
          </Box>
        </RightSide>
      </Container>
    </>
  );
};
