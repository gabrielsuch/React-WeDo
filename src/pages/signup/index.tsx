import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../services/api';

import { Input, InputPassword } from '../../components/Input';
import { Button } from '../../components/Button';

import { signupValidation } from './Validation';

import logoSignup from '../../assets/logoSignup.png';
import Flowers from '../../assets/Flowers.png';
import {
  Container,
  LeftSide,
  RightSide,
  Box,
  CenterForm,
  Form,
  AlreadyRegistered,
  DivFlower,
} from './style';

export const Signup = () => {
  const history = useHistory();

  const schema = signupValidation;

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
                  <p className="font__body">
                    Já possui uma conta?{' '}
                    <span onClick={() => history.push('/')}>Faça login</span>
                  </p>
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
