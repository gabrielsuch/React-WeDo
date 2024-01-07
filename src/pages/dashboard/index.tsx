import { HabitsContainer } from '../../components/HabitsContainer';
import {Header} from '../../components/Header';
import { GroupsContainer } from '../../components/GroupsContainer';

import { Main } from './style';

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <HabitsContainer />
        <GroupsContainer />
      </Main>
    </>
  );
};
