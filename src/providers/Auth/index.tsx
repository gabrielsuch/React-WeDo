import { useState, createContext, useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';

import api from '../../services/api';

export const AuthContext = createContext({});

const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const access = localStorage.getItem('@WeDo:access');
    const user = localStorage.getItem('@WeDo:user');

    if (access && user) {
      return { access, user: JSON.parse(user) };
    }

    return {};
  });

  const history = useHistory();

  const signIn = (data) => {
    api
      .post('sessions/', data)
      .then((response) => {
        const { access } = response.data;

        const user = jwt_decode(access);

        localStorage.setItem('@WeDo:access', access);
        localStorage.setItem('@WeDo:user', JSON.stringify(user));

        setData({ access, user });
        history.push('/dashboard');

        toast.success('Login realizado com sucesso!');
      })
      .catch((err) => toast.error('Email ou senha inválida'));
  };

  const signOut = () => {
    localStorage.removeItem('@WeDo:token');
    localStorage.removeItem('@WeDo:user');

    setData({});
  };

  return (
    <AuthContext.Provider
      value={{ access: data.access, user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuth };
