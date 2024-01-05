import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useGroup } from "../../providers/Groups";
import { useAuth } from "../../providers/Auth";

import { Button } from "../Button";
import { GroupEdit } from "../GroupEdit";

import { Container } from "./style";

export const GroupInfo = ({ specifiGroup }) => {
  const { user } = useAuth();
  const { id } = useParams();

  const [modal, setModal] = useState(false);

  const { loadGroup } = useGroup();

  useEffect(() => {
    loadGroup(id);
  }, [id]);

  const {
    description,
    users_on_group: lengthUser,
    goals,
    activities,
    creator,
  } = specifiGroup;

  return (
    <Container>
      <div className="description">Descrição</div>
      <div className="description-group">
        <p className="p-description-group">{description && description}</p>
      </div>
      <div className="users-group">
        Usuarios no Grupo: <span>{lengthUser && lengthUser.length}</span>
      </div>
      <div className="goals-group">
        Metas: <span>{goals && goals.length}</span>
      </div>
      <div className="activitis-groups">
        Atividades: <span>{activities && activities.length}</span>{" "}
      </div>
      <footer className="creator">
        <p className="forOne">
          <span className="creator-span">@</span>
          {creator && creator.username}
        </p>
        {creator && creator.id === user.user_id ? (
          <Button onClick={() => setModal(true)} secondary>
            Editar
          </Button>
        ) : null}
      </footer>
      {modal ? <GroupEdit setModal={setModal} /> : null}
    </Container>
  );
};
