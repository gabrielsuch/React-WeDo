import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useUser } from '../../providers/User';

import { Modal } from '../Modal';
import { Input } from '../Input/index';
import { Button } from '../Button/index';

import {
  Container,
  ContainerModal,
  HeaderModal,
  MainModal,
  Form,
  FixForm,
} from './style';

import {editUserSchema} from "../../schemas/user.schema"


export const HeaderProfileEdit = ({ toggleEdit }) => {
  const { userInfo, getUserInfo, handleUserEdit } = useUser();

  const { username, email } = userInfo;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(editUserSchema)
  })

  const userEdit = (data) => {
    handleUserEdit(data, toggleEdit);
  };

  useEffect(() => {
    getUserInfo();

    reset({ username, email });
  }, []);

  return (
    <>
      <Container>
        <ContainerModal>
          <HeaderModal>
            <h2>Editar perfil</h2>
          </HeaderModal>
          <MainModal>
            <Form onSubmit={handleSubmit(userEdit)}>
              <FixForm>
                <Input
                  register={register}
                  errors={errors}
                  name="username"
                  placeholder="Nome"
                  isEmpty={false}
                />
                <Input
                  register={register}
                  errors={errors}
                  name="email"
                  placeholder="Email"
                  isEmpty={false}
                />
              </FixForm>
              <Button type="submit">Atualizar</Button>
            </Form>
          </MainModal>
        </ContainerModal>
      </Container>
      <Modal onClick={toggleEdit} />
    </>
  );
};
