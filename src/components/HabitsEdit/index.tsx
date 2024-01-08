import { useEffect } from 'react';
import { Container } from './style';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHabits } from '../../providers/Habits';

import { Input, InputRadio, InputRadioContainer } from '../Input';
import { Button } from '../Button';

import {updateHabitSchema} from "../../schemas/habits.schema"


export const HabitsEdit = ({ id, showEdit, toggleEdit }) => {
  const { updateHabit, deleteHabit, habitEditInfo } = useHabits();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(updateHabitSchema)
  })

  const handleUpdate = (data) => {
    updateHabit(id, data);
    toggleEdit();
  };

  const handleDelete = () => {
    deleteHabit(id);
    toggleEdit();
  };

  useEffect(() => {
    habitEditInfo(id, reset);
  }, [showEdit]);

  return (
    <Container>
      <h2>Editar Hábito</h2>
      <form onSubmit={handleSubmit(handleUpdate)}>
        <section className="inputs">
          <Input
            register={register}
            errors={errors}
            name="title"
            placeholder="Título"
            isEmpty={false}
          />
          <Input
            register={register}
            errors={errors}
            name="category"
            placeholder="Category"
            isEmpty={false}
          />
          <InputRadioContainer
            register={register}
            errors={errors}
            name="frequency"
            title="Frequência"
          >
            <InputRadio register={register} name="frequency" label="Diária" />
            <InputRadio register={register} name="frequency" label="Semanal" />
            <InputRadio register={register} name="frequency" label="Mensal" />
            <InputRadio register={register} name="frequency" label="Anual" />
          </InputRadioContainer>
          <InputRadioContainer
            register={register}
            errors={errors}
            name="difficulty"
            title="Dificuldade"
          >
            <InputRadio
              register={register}
              name="difficulty"
              label="Muito Fácil"
              sizeBigger
            />
            <InputRadio
              register={register}
              name="difficulty"
              label="Fácil"
              sizeBigger
            />

            <InputRadio
              register={register}
              name="difficulty"
              label="Médio"
              sizeBigger
            />
            <InputRadio
              register={register}
              name="difficulty"
              label="Difícil"
              sizeBigger
            />
            <InputRadio
              register={register}
              name="difficulty"
              label="Muito Difícil"
              sizeBigger
            />
          </InputRadioContainer>
        </section>
        <section className="buttons">
          <Button secondary onClick={handleDelete}>
            Deletar
          </Button>
          <Button type="submit">Atualizar</Button>
        </section>
      </form>
    </Container>
  );
};
