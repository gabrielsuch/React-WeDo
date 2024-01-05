import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { useAuth } from '../Auth';
import { useGroup } from '../Groups';

const GoalsContext = createContext();

const useGoals = () => useContext(GoalsContext);

const GoalsProvider = ({ children }) => {
  const [goal, setGoal] = useState({});

  const { access } = useAuth();
  const { loadGroup, isUserInGroup } = useGroup();

  const addGoal = (data, groupId, toggleAdd) => {
    data.how_much_achieved = 0;
    data.achieved = false;
    data.group = groupId;

    if (isUserInGroup) {
      api
        .post(`/goals/`, data, {
          headers: { Authorization: `Bearer ${access}` },
        })
        .then((response) => {
          toast.success('Meta adicionada com sucesso!');
          toggleAdd();
          loadGroup(groupId);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error(
        'Você precisa fazer parte do grupo para poder adicionar uma meta!'
      );
    }
  };

  const removeGoal = (goalId, groupId) => {
    if (isUserInGroup) {
      api
        .delete(`/goals/${goalId}/`, {
          headers: { Authorization: `Bearer ${access}` },
        })
        .then((response) => {
          toast.success('Meta removida com sucesso!');
          loadGroup(groupId);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error(
        'Você precisa fazer parte do grupo para poder remover uma meta!'
      );
    }
  };

  const getGoal = (goalId, reset) => {
    api
      .get(`/goals/${goalId}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setGoal(response.data);

        if (reset) {
          const { title, difficulty } = response.data;
          reset({ title, difficulty });
        }
      })
      .catch((err) => console.log(err));
  };

  const updateGoal = (data, goalId, groupId, toggleEdit, condition) => {
    if (isUserInGroup) {
      api
        .patch(`/goals/${goalId}/`, data, {
          headers: { Authorization: `Bearer ${access}` },
        })
        .then((response) => {
          if (condition === 'achieved') {
            toast.success('Meta realizada!');
          } else {
            toggleEdit();
            toast.success('Meta atualizada com sucesso!');
          }

          setGoal(response.data);
          loadGroup(groupId);
        })
        .catch((err) => console.log(err));
    } else {
      toast.error(
        'Você precisa fazer parte do grupo para poder editar uma meta!'
      );
    }
  };

  return (
    <GoalsContext.Provider
      value={{ goal, addGoal, getGoal, updateGoal, removeGoal }}
    >
      {children}
    </GoalsContext.Provider>
  );
};

export { useGoals, GoalsProvider };
