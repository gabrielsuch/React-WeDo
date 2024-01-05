import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHabits } from '../../providers/Habits';

import { Input, InputRadio, InputRadioContainer } from '../Input';
import { Button } from '../Button';

import { addValidation } from './Validations';

import { Container } from './style';

export const HabitsAdd = ({ toggleAdd }) => {
  const { addHabit } = useHabits();

  const schema = addValidation;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleAddHabit = (data) => {
    addHabit(data);
    toggleAdd();
  };

  return (
    <Container>
      <h2>Adicionar hábito</h2>

      <form onSubmit={handleSubmit(handleAddHabit)}>
        <section className="inputs">
          <Input
            register={register}
            errors={errors}
            name="title"
            placeholder="Título"
          />
          <Input
            register={register}
            errors={errors}
            name="category"
            placeholder="Category"
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
        <Button type="submit">Enviar</Button>
      </form>
    </Container>
  );
};
