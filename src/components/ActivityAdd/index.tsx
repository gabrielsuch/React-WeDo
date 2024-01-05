import { useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';

import { useActivities } from '../../providers/Activities';

import { Input } from '../Input';
import { Button } from '../Button';
import { Modal } from '../Modal';

import { activityAddValidation } from './Validation';
import { formattedDate } from '../Input/Utility/formatter';

import { Container } from './style';

export const ActivityAdd = ({ setOpenModal }) => {
  const params = useParams();

  const { addActivity } = useActivities();

  const schema = activityAddValidation;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useState(() => {
    reset({ realization_time: formattedDate(new Date()) });
  });

  const handleAddActivity = (data) => {
    addActivity(data, params.id);
    setOpenModal(false);
  };

  return (
    <>
      <Modal onClick={() => setOpenModal(false)} />
      <Container>
        <h2>Adicionar Atividade</h2>
        <form onSubmit={handleSubmit(handleAddActivity)}>
          <section className="inputs">
            <Input
              register={register}
              errors={errors}
              name="title"
              placeholder="Título"
            />
            <Input
              maxLength={10}
              maskInput
              fillInput
              date
              isEmpty={false}
              register={register}
              errors={errors}
              name="realization_time"
              placeholder="Data"
            />
          </section>
          <Button type="submit">Adicionar</Button>
        </form>
      </Container>
    </>
  );
};
