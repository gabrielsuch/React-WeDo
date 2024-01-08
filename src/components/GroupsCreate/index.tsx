import { Container } from './style';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import {api} from '../../services/api';
import { useAuth } from '../../providers/Auth';

import { Input } from '../Input';
import { Button } from '../Button';
import { Modal } from '../Modal';

import {createGroupSchema} from "../../schemas/group.schema"


export const GroupsCreate = ({ setModal }) => {
  const lastTest = () => {
    setModal(false);
  };

  const schema = groupsCreateValidation;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createGroupSchema)
  })

  const { access } = useAuth();
  console.log(access);

  const formValue = (data) => {
    api
      .post(`groups/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Grupo criado com sucesso');
        setModal(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Modal onClick={lastTest} />
      <Container onSubmit={handleSubmit(formValue)}>
        <h2>Adicionar Grupo</h2>
        <section className="raiva">
          <Input
            register={register}
            errors={errors}
            name="name"
            placeholder="Nome"
          />
          <Input
            register={register}
            errors={errors}
            name="description"
            placeholder="Descrição"
          />
          <Input
            register={register}
            errors={errors}
            name="category"
            placeholder="Categoria"
          />
        </section>

        <div className="button">
          <Button>Adicionar</Button>
        </div>
      </Container>
    </>
  );
};
