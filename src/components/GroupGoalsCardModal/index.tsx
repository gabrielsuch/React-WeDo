import {useEffect} from "react"

import {GroupGoalsCard} from "../GroupGoalsCard/index"

import {useGoals} from "../../providers/Goals/index"

export const GroupGoalsCardModal = ({goalId, groupId}: any) => {
    const {getGoal, goal} = useGoals()

    useEffect(() => {
        getGoal(goalId)
    }, [])

    return <GroupGoalsCard goal={goal} groupId={groupId} open />
}
