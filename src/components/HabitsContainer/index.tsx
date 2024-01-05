import { useState, useEffect } from 'react';

import { useHabits } from '../../providers/Habits';

import { IconButton } from '../Button';
import { EmptyCardInfo } from '../EmptyCardInfo';
import { HabitsCard } from '../HabitsCard';
import { HabitsAdd } from '../HabitsAdd';
import { Modal } from '../Modal';

import { Container } from './style';

export const HabitsContainer = () => {
  const [showAdd, setShowAdd] = useState(false);

  const { habits, hasHabits, loadHabits } = useHabits();

  const toggleAdd = () => {
    setShowAdd(!showAdd);
  };

  useEffect(() => {
    loadHabits();
  }, [loadHabits, habits]);

  return (
    <>
      <Container>
        <header>
          <h2>Meus hábitos</h2>
          <IconButton add onClick={toggleAdd} />
        </header>
        <main>
          {hasHabits ? (
            <section className="habits__container">
              {habits.map((habit) => (
                <HabitsCard key={habit.id} habit={habit} />
              ))}
            </section>
          ) : (
            <EmptyCardInfo habits />
          )}
        </main>
      </Container>
      {showAdd && <Modal onClick={toggleAdd} />}
      {showAdd && <HabitsAdd toggleAdd={toggleAdd} />}
    </>
  );
};
