import { useEffect, useState } from 'react';

import { useGroup } from '../../providers/Groups';

import { EmptyCardInfo } from '../EmptyCardInfo';
import { TitleCounter } from '../GroupContent/Utility';
import { GroupGoalsCard } from '../GroupGoalsCard';
import { GroupGoalsAdd } from '../GroupGoalsAdd';
import { Button } from '../Button';
import { Modal } from '../Modal';

import { Container } from './style';

export const GroupGoals = ({ specifiGroup }) => {
  const [hasGoals, setHasGoals] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const { checkUserInGroup, isUserInGroup } = useGroup();
  const { id, goals } = specifiGroup;

  const toggleAdd = () => {
    setShowAdd(!showAdd);
  };

  useEffect(() => {
    if (goals) {
      setHasGoals(goals.length > 0);
    }

    checkUserInGroup();
  }, [goals]);

  return (
    <>
      <Container hasGoals={hasGoals}>
        <main className="goals__container">
          {hasGoals ? (
            goals.map((goal) => <GroupGoalsCard key={goal.id} goal={goal} />)
          ) : (
            <EmptyCardInfo goals />
          )}
        </main>
        <footer className="goals__container">
          {hasGoals && <TitleCounter content={goals} name="Meta" />}
          {isUserInGroup && <Button onClick={toggleAdd}>Adicionar meta</Button>}
        </footer>
      </Container>
      {showAdd && <Modal onClick={toggleAdd} />}
      {showAdd && <GroupGoalsAdd toggleAdd={toggleAdd} groupId={id} />}
    </>
  );
};
