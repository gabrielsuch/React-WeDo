import { useEffect } from 'react';

import api from '../../services/api';
import { useAuth } from '../../providers/Auth';

import { InputSearch } from '../Input';

export const FindGroups = ({ input, setInput, setGroupInput }) => {
  const { access } = useAuth();

  useEffect(() => {
    api
      .get(`groups/?search=${input}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const newGroups = response.data.results;

        if (input !== '') {
          setGroupInput([...newGroups]);
        }
      })
      .catch((err) => console.log(err));
  }, [input]);

  return (
    <InputSearch
      placeholder="Pesquisar meus grupos..."
      onChange={(e) => {
        setInput(e.target.value);
      }}
    />
  );
};
