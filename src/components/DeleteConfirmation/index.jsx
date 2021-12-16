import { Button } from '../Button';

import { Container } from './style';

export const DeleteConfirmation = ({ toggleShowDelete, deleteFunction }) => {
  return (
    <Container>
      <h2>Tem certeza que deseja excluir?</h2>
      <main>
        <Button onClick={toggleShowDelete} secondary>
          Não
        </Button>
        <Button onClick={deleteFunction}>Sim</Button>
      </main>
    </Container>
  );
};
