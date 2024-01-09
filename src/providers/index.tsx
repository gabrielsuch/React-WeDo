import {ReactNode} from "react"

import {AuthProvider} from "./Auth/index"
import {HabitsProvider} from "./Habits/index"
import {GroupProvider} from "./Groups/index"
import {UserProvider} from "./User/index"
import {ActivitiesProvider} from "./Activities/index"
import {GoalsProvider} from "./Goals/index"

interface ChildrenProps {
    children: ReactNode
}

export const Providers = ({children}: ChildrenProps) => {
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
    )
}
