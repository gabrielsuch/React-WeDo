import { useHistory } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useAuth } from '../../providers/Auth';

import { Input, InputPassword } from '../../components/Input';
import { Button } from '../../components/Button';

import logoLogin from '../../assets/logoLogin.png';
import flowersLogin from '../../assets/flowersLogin.png';
import { AlreadyRegistered } from '../signup/style';
import { Container, Form } from './styles';

import {loginSchema} from "../../schemas/user.schema"


export const Login = () => {

  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { signIn } = useAuth();

  const formValue = (data) => {
    signIn(data);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(formValue)}>
        <Input
          placeholder="Username"
          register={register}
          name="username"
          errors={errors}
        />
        <InputPassword
          placeholder="Senha"
          register={register}
          name="password"
          errors={errors}
        />
        <Button type="submit">Login</Button>
        <AlreadyRegistered>
          <p className="font__body">
            Não possui uma conta?{' '}
            <span
              className="span-redirect"
              onClick={() => {
                history.push('/signup');
              }}
            >
              Cadastre-se
            </span>
          </p>
        </AlreadyRegistered>
        <img className="flower" src={flowersLogin} alt="flower" />
      </Form>
      <img className="image" src={logoLogin} alt="yoga" />
    </Container>
  );
};
