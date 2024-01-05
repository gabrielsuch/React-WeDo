import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { useAuth } from '../Auth';

const HabitsContext = createContext();

const useHabits = () => useContext(HabitsContext);

const HabitsProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const [hasHabits, setHasHabits] = useState(false);

  const { access, user } = useAuth();

  const loadHabits = () => {
    api
      .get('habits/personal/', {
        headers: { Authorization: `Bearer ${access}` },
      })

      .then((response) => {
        const habits = response.data;
        setHabits(habits);
        setHasHabits(!!habits.length);
      });
  };

  const updateHabit = (id, data, condition) => {
    api
      .patch(`habits/${id}/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        condition === 'achieved'
          ? toast.success('Hábito realizado!')
          : toast.success('Hábito editado com sucesso!');
      })
      .catch((err) => {
        condition === 'achieved'
          ? toast.error('Não foi possível realizar.')
          : toast.error('Não foi possível editar.');
      });
  };

  const deleteHabit = (id) => {
    api
      .delete(`/habits/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Hábito excluído!');
      })
      .catch((err) => {
        toast.error('Não foi possível excluir');
        console.log(err);
      });
  };

  const habitEditInfo = (id, reset) => {
    api
      .get(`habits/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const { title, category, frequency, difficulty } = response.data;

        console.log(response.data);

        reset({
          title,
          category,
          frequency,
          difficulty,
        });
      });
  };

  const addHabit = (data) => {
    data.achieved = false;
    data.how_much_achieved = 0;
    data.user = user.user_id;

    api
      .post('habits/', data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setHabits([...habits, response.data]);
        toast.success('Hábito criado!');
      })
      .catch((err) => {
        console.log(err);
        toast.error('Não foi possível criar um hábito');
      });
  };

  return (
    <HabitsContext.Provider
      value={{
        habits,
        hasHabits,
        loadHabits,
        updateHabit,
        deleteHabit,
        habitEditInfo,
        addHabit,
      }}
    >
      {children}
    </HabitsContext.Provider>
  );
};

export { useHabits, HabitsProvider };
