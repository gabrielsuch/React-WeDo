import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useGoals } from '../../providers/Goals';

import { Button } from '../Button';
import { Input, InputRadioContainer, InputRadio } from '../Input';

import { goalsAddValidation } from './Validation';

import { Container } from './style';

export const GroupGoalsAdd = ({ toggleAdd, groupId }) => {
  const schema = goalsAddValidation;

  const { addGoal } = useGoals();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddGoal = (data) => {
    addGoal(data, groupId, toggleAdd);
  };

  return (
    <Container>
      <h2>Adicionar meta</h2>
      <form onSubmit={handleSubmit(handleAddGoal)}>
        <section className="inputs">
          <Input
            register={register}
            errors={errors}
            name="title"
            placeholder="Título"
          />

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
        <Button type="submit">Adicionar</Button>
      </form>
    </Container>
  );
};
