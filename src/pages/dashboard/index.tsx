import {Main} from "./style"

import {Header} from "../../components/Header"
import {HabitsContainer} from "../../components/HabitsContainer"
import {GroupsContainer} from "../../components/GroupsContainer"


export const Dashboard = () => {
    return (
        <>
            <Header/>
            <Main>
                <HabitsContainer/>
                <GroupsContainer/>
            </Main>
        </>
    )
}
