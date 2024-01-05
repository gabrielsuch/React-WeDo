import { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { useAuth } from '../Auth';

const GroupContext = createContext();

const useGroup = () => useContext(GroupContext);

const GroupProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);
  const [hasMyGroups, setHasMyGroups] = useState([]);
  const [specifiGroup, setSpecifiGroup] = useState({});
  const [isUserInGroup, setIsUserInGroup] = useState(false);
  const [akuma, setAkuma] = useState(false);
  const history = useHistory();

  const { access, user } = useAuth();

  const sub = (x) => {
    const legacy = !!x.find((value) => value.id === user.user_id);
    setAkuma(!legacy);
  };

  const subOn = (id) => {
    api
      .post(`/groups/${id}/subscribe/`, null, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        loadGroup(id);
        toast.success('Inscrição realizada com sucesso');
      })
      .catch((err) => toast.error('Erro ao se inscrever'));
  };

  const subOff = (id) => {
    api
      .delete(`/groups/${id}/unsubscribe/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        loadGroup(id);
        toast.success('Desinscrição realizada com sucesso');
      })
      .catch((err) => toast.error('Erro ao se desinscrever'));
  };

  const loadMyGroups = () => {
    api
      .get('/groups/subscriptions/', {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        setMyGroups(response.data);
        setHasMyGroups(!!response.data.length);
      })
      .catch((err) => console.log(err));
  };

  const loadGroup = (id) => {
    api
      .get(`/groups/${id}/`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        sub(response.data.users_on_group);
        setSpecifiGroup(response.data);
        history.push(`/group/${id}`);
      })
      .catch((err) => console.log(err));
  };

  const checkUserInGroup = () => {
    const { user_id } = user;
    const { users_on_group } = specifiGroup;
    const userInGroup = !!users_on_group.find(({ id }) => id === user_id);
    setIsUserInGroup(userInGroup);
  };

  return (
    <GroupContext.Provider
      value={{
        myGroups,
        hasMyGroups,
        loadMyGroups,
        loadGroup,
        specifiGroup,
        akuma,
        subOn,
        subOff,
        checkUserInGroup,
        isUserInGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export { useGroup, GroupProvider };
