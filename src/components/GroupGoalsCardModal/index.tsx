import { useEffect } from 'react';

import { useGoals } from '../../providers/Goals';

import { GroupGoalsCard } from '../GroupGoalsCard';

export const GroupGoalsCardModal = ({ goalId, groupId }) => {
  const { getGoal, goal } = useGoals();

  useEffect(() => {
    getGoal(goalId);
  }, []);

  return (
    <>
      <GroupGoalsCard goal={goal} groupId={groupId} open />
    </>
  );
};
