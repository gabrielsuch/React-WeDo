import { AuthProvider } from './Auth';
import { HabitsProvider } from './Habits';
import { GroupProvider } from './Groups';
import { UserProvider } from './User';
import { ActivitiesProvider } from './Activities';
import { GoalsProvider } from './Goals';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitsProvider>
        <GroupProvider>
          <ActivitiesProvider>
            <UserProvider>
              <GoalsProvider>{children}</GoalsProvider>
            </UserProvider>
          </ActivitiesProvider>
        </GroupProvider>
      </HabitsProvider>
    </AuthProvider>
  );
};

export default Providers;
