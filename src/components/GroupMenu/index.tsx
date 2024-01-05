import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import { Modal } from '../Modal';

import { Container } from './style';

export const GroupMenu = ({ selectedOption, setSelectedOption }) => {
  const [openMenu, setOpenMenu] = useState(false);

  const selectInfo = () => {
    setSelectedOption('Info');
  };

  const selectGoals = () => {
    setSelectedOption('Metas');
  };

  const selectActivities = () => {
    setSelectedOption('Atividades');
  };

  const selectUsers = () => {
    setSelectedOption('Usuários');
  };

  return (
    <>
      <Container openMenu={openMenu} selectedOption={selectedOption}>
        <section className="selected">
          <p>{selectedOption}</p>
          {openMenu ? (
            <FiX onClick={() => setOpenMenu(false)} />
          ) : (
            <FiMenu onClick={() => setOpenMenu(true)} />
          )}
        </section>

        {openMenu && (
          <Modal className="modal" onClick={() => setOpenMenu(false)} />
        )}

        <section className="menu__options">
          <p id="infoOption" onClick={selectInfo}>
            Info
          </p>
          <p id="goalsOption" onClick={selectGoals}>
            Metas
          </p>
          <p id="activitiesOption" onClick={selectActivities}>
            Atividades
          </p>
          <p id="usersOption" onClick={selectUsers}>
            Usuários
          </p>
        </section>
      </Container>
    </>
  );
};
