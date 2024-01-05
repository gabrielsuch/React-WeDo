import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { useAuth } from '../Auth';
import { useGroup } from '../Groups';

import {
  formattedDate,
  requisitionDate,
} from '../../components/Input/Utility/formatter';

const ActivitiesContext = createContext();

const useActivities = () => useContext(ActivitiesContext);

const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  const { specifiGroup } = useGroup();
  const groupId = specifiGroup.id;

  const { access } = useAuth();

  const loadActivities = () => {
    api
      .get(`activities/?group=${groupId}`)
      .then((response) => {
        setActivities(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addActivity = (data, groupId) => {
    data.group = groupId;

    const { realization_time } = data;

    const newDate = requisitionDate(realization_time);
    data.realization_time = newDate;

    formattedDate(new Date(newDate));

    api
      .post('activities/', data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setActivities([...activities, response.data]);
        toast.success('Atividade criada!');
      })
      .catch((err) => {
        toast.error('Não foi possível criar a atividade');
        console.log(err);
      });
  };

  const deleteActivity = (id) => {
    api
      .delete(`activities/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Atividade excluída!');
        loadActivities();
      })
      .catch((err) => {
        toast.error('Erro na exclusão da atividade');
        console.log(err);
      });
  };

  const updateActivity = (id, data, setOpenModalEdit) => {
    const { realization_time } = data;
    const [day, month, year] = realization_time.split('/');
    const newDateFormat = `${year}-${month}-${day}`;
    const newDate = new Date(newDateFormat).toISOString();
    data.realization_time = newDate;

    requisitionDate(realization_time);

    api
      .patch(`activities/${id}/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Atividade editada com sucesso');
        loadActivities();
        setOpenModalEdit(false);
      })
      .catch((err) => {
        toast.error('Erro ao editar atividade');
        console.log(err);
      });
  };

  const restoreInfos = (id, reset) => {
    api
      .get(`activities/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const { title, realization_time } = response.data;

        const newDate = formattedDate(new Date(realization_time));

        reset({
          title: title,
          realization_time: newDate,
        });
      });
  };

  return (
    <ActivitiesContext.Provider
      value={{
        addActivity,
        deleteActivity,
        activities,
        setActivities,
        updateActivity,
        loadActivities,
        restoreInfos,
      }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export { useActivities, ActivitiesProvider };
