import { useEffect } from 'react';

import { useAuth } from '../../providers/Auth';
import { useUser } from '../../providers/User';

import { Button } from '../Button';
import { Modal } from '../Modal';

import { Container } from './style';

export const HeaderMenu = ({ openEdit, toggleEdit, toggleHover }) => {
  const { userInfo, getUserInfo } = useUser();
  const { signOut } = useAuth();

  const { username, email } = userInfo;

  useEffect(() => {
    getUserInfo();
  }, [openEdit]);

  return (
    <>
      <Modal onClick={toggleHover} />
      <Container>
        <p>
          <span>@</span>
          {username}
        </p>
        <p>{email}</p>
        <Button onClick={toggleEdit}>Editar perfil</Button>
        <Button onClick={signOut} secondary>
          Logout
        </Button>
      </Container>
    </>
  );
};
