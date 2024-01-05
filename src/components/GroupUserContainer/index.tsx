import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useGroup } from '../../providers/Groups';

import { GroupUseCard } from '../GroupUserCard';
import { EmptyCardInfo } from '../EmptyCardInfo';

import { TitleCounter } from '../GroupContent/Utility';

import { Container } from '../GroupGoals/style';
import { Footer } from './style';

export const GroupUserContainer = () => {
  const { specifiGroup, loadGroup } = useGroup();
  const { id } = useParams();

  const { users_on_group: users } = specifiGroup;

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  return (
    <Container>
      <main className="users__container">
        {users.length > 0 ? <GroupUseCard /> : <EmptyCardInfo user />}
      </main>

      <Footer>
        {users.length > 0 && <TitleCounter content={users} name="Usuário" />}
      </Footer>
    </Container>
  );
};
