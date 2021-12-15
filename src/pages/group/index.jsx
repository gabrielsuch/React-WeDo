import { useState } from "react";
import { useHistory } from "react-router-dom";
import { GroupInfo } from "../../components/GroupInfo";

import Header from "../../components/Header";
import { Button } from "../../components/Button";
import { Info, Goal, Activity, Users } from "../../components/GroupInteract";

import { GroupMenu } from "../../components/GroupMenu";

import { Main, GroupTitle, Options, GroupInfos, Footer } from "./style";

export const Group = ({ group }) => {
  const [info, setInfo] = useState(true);
  const [goal, setGoal] = useState(false);
  const [activity, setActivity] = useState(false);
  const [users, setUsers] = useState(false);
  const history = useHistory();

  const functionInfo = () => {
    setInfo(true);
    setGoal(false);
    setActivity(false);
    setUsers(false);
  };

  const functionGoal = () => {
    setInfo(false);
    setGoal(true);
    setActivity(false);
    setUsers(false);
  };

  const functionActivity = () => {
    setInfo(false);
    setGoal(false);
    setActivity(true);
    setUsers(false);
  };

  const functionUsers = () => {
    setInfo(false);
    setGoal(false);
    setActivity(false);
    setUsers(true);
  };

  // const {
  //     name,
  //     description,
  //     category,
  //     creator,
  //     users_on_group,
  //     goals,
  //     activities,
  // } = group

  return (
    <>
      <Header />
      <Main>
        <GroupTitle>
          <h2>Aqui vai (name)</h2>
          <Button className="font__body">Aqui vai (category)</Button>
        </GroupTitle>
        <GroupMenu />
        <GroupInfos>
          {info && <GroupInfo />}
          {goal && <Goal />}
          {activity && <Activity />}
          {users && <Users />}
        </GroupInfos>
        <Footer>
          <Button>Inscrever-se</Button>
          <Button onClick={() => history.push("/groups")}>Voltar</Button>
        </Footer>
      </Main>
    </>
  );
};
