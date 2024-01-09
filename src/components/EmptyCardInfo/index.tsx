import {Container} from "./style"

import NoHabits from "../../assets/no-habits.png"
import NoActivity from "../../assets/no-activity.png"
import NoUsers from "../../assets/no-users.png"

export const EmptyCardInfo = ({habits, goals, activity, user}: any) => {
    return (
        <Container habits={habits} goals={goals} activity={activity} user={user}>
            {habits && (
                <>
                    <p>Nenhum hábito ainda, clique para adicionar um!</p>
                    <img src={NoHabits} alt="No habits available" />
                </>
            )}

            {goals && (
                <>
                    <p>Nenhuma meta ainda, clique para adicionar um!</p>
                </>
            )}

            {activity && (
                <>
                    <p>Nenhuma atividade ainda, clique para adicionar uma!</p>
                    <img src={NoActivity} alt="No activity available to show." />
                </>
            )}

            {user && (
                <>
                    <p>Nenhum usuário no grupo, seja o primeiro!</p>
                    <img src={NoUsers} alt="No users available to show." />
                </>
            )}
        </Container>
    )
}
