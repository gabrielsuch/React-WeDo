import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../providers/Auth';
import api from '../../services/api';

import Header from '../../components/Header';
import { RenderGroups } from '../../components/RenderGroups';
import { CreateGroup } from '../../components/CreateGroups';
import { FindGroups } from '../../components/FindGroups';
import { ContainerGroupNone } from '../../components/ContainerGroupNone';
import { Button } from '../../components/Button';

import { Div, Container, Cabecalho, Footer } from './style';

export const Groups = () => {
  const [groups, setGroups] = useState([]);
  const [input, setInput] = useState('');
  const [groupInput, setGroupInput] = useState([]);
  const { access } = useAuth();
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);

  const history = useHistory();

  useEffect(() => {
    api
      .get(`groups/?page=${page}`, {
        headers: { Authorization: `Bearer ${access}` },
      })
      .then((response) => {
        const newGroups = response.data.results;

        setGroups([...groups, ...newGroups]);
      })
      .catch((err) => console.log(err));
  }, [page]);

  return (
    <>
      <Header />
      <Div>
        <Container>
          <Cabecalho>
            <div className="flex">
              <h2>Grupos</h2>
            </div>

            <FindGroups
              placeholder="Pesquisar Grupos..."
              type="text"
              input={input}
              setInput={setInput}
              groupInput={groupInput}
              setGroupInput={setGroupInput}
            />
          </Cabecalho>
          {groups.length === 0 ? (
            <ContainerGroupNone />
          ) : (
            <RenderGroups
              groups={groups}
              setGroups={setGroups}
              groupInput={groupInput}
              input={input}
              page={page}
              setPage={setPage}
            />
          )}

          <Footer>
            <Button secondary onClick={() => history.push('/dashboard')}>
              Voltar
            </Button>
            <Button className="redButtom" onClick={() => setModal(true)}>
              Criar Grupo
            </Button>
          </Footer>
        </Container>
        {modal ? <CreateGroup modal={modal} setModal={setModal} /> : null}
      </Div>
    </>
  );
};
