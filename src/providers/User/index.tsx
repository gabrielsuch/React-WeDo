import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

import api from '../../services/api';
import { useAuth } from '../Auth';

const UserContext = createContext();

const useUser = () => useContext(UserContext);

const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const { user, access } = useAuth();

  const getUserInfo = () => {
    api
      .get(`/users/${user.user_id}/`)
      .then((response) => setUserInfo(response.data))
      .catch((err) => console.log(err));
  };

  const handleUserEdit = (data, toggleEdit) => {
    api
      .patch(`/users/${user.user_id}/`, data, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        toast.success('Perfil atualizado!');
        toggleEdit();
      })
      .catch((err) => {
        const { username } = err.response.data;
        console.log(username);
        if (!!username) {
          toast.error(
            'Um usuário com esse username já existe! Por favor, escolha outro!'
          );
        } else {
          toast.error('Não foi possível atualizar o perfil');
        }
      });
  };

  return (
    <UserContext.Provider value={{ userInfo, getUserInfo, handleUserEdit }}>
      {children}
    </UserContext.Provider>
  );
};

export { useUser, UserProvider };
