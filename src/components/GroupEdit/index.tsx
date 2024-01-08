import { useEffect } from 'react';
import { Container } from './style';

import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';

import {api} from "../../services/api";
import { useAuth } from "../../providers/Auth";
import { useGroup } from "../../providers/Groups";

import { Input } from "../Input";
import { Button } from "../Button";
import { Modal } from "../Modal";

import {updateGroupSchema} from "../../schemas/group.schema"


export const GroupEdit = ({ setModal }) => {
  const lastTest = () => {
    setModal(false);
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(updateGroupSchema),
  });

  const { access } = useAuth();
  const { id } = useParams();
  const { loadGroup } = useGroup();

  useEffect(() => {
    api
      .get(`/groups/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const { name, description, category } = response.data;
        reset({ name, description, category });
        console.log(name, category, description);
      })
      .catch((err) => console.log(err));
  }, []);

  const onSubmit = (data: any) => {
    api
      .patch(`groups/${id}/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success("Grupo editado com sucesso");
        loadGroup(id);
        setModal(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <Modal onClick={lastTest} />
      <Container onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar Grupo</h2>
        <section className="happy">
          <Input
            isEmpty={false}
            register={register}
            errors={errors}
            name="name"
            placeholder="Nome"
          />
          <Input
            isEmpty={false}
            register={register}
            errors={errors}
            name="description"
            placeholder="Descrição"
          />
          <Input
            isEmpty={false}
            register={register}
            errors={errors}
            name="category"
            placeholder="Categoria"
          />
        </section>

        <div className="button">
          <Button>Atualizar</Button>
        </div>
      </Container>
    </>
  );
};
