import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useGroup } from '../../providers/Groups';

import { InputSearch } from '../Input';
import { Button } from '../Button';
import { RenderGroups } from '../RenderGroups';

import { Container } from './style';

export const GroupsContainer = () => {
  const { myGroups, hasMyGroups, loadMyGroups } = useGroup();
  const history = useHistory();
  const [groupInput, setGroupInput] = useState('');

  const include = (e) => {
    const a = myGroups.filter((group) =>
      group.name.toUpperCase().includes(e.toUpperCase())
    );
    setGroupInput(a);
  };

  useEffect(() => {
    loadMyGroups();
  }, []);

  return (
    <Container>
      <section className="content">
        <header>
          <h2>Meus grupos</h2>
          {hasMyGroups && (
            <InputSearch
              placeholder="Pesquisar meus grupos..."
              onChange={(e) => {
                include(e.target.value);
              }}
            />
          )}
        </header>
        <main>
          {hasMyGroups ? (
            <RenderGroups
              groups={myGroups}
              groupInput={groupInput}
              bol={false}
            />
          ) : (
            <p className="empty__container">
              Você não está em nenhum grupo, encontre grupos que queira entrar!
            </p>
          )}
        </main>
        <footer>
          <Button onClick={() => history.push('/groups')}>
            Encontrar grupos
          </Button>
        </footer>
      </section>
    </Container>
  );
};
