import {useEffect, useState} from "react"

import {Container} from "./style"

import {EmptyCardInfo} from "../EmptyCardInfo/index"
import {TitleCounter} from "../GroupContent/Utility/index"
import {GroupGoalsCard} from "../GroupGoalsCard/index"
import {GroupGoalsAdd} from "../GroupGoalsAdd/index"
import {Button} from "../Button/index"
import {Modal} from "../Modal/index"

import {useGroup} from "../../providers/Groups"

export const GroupGoals = ({specifiGroup}: any) => {
    const [hasGoals, setHasGoals] = useState<boolean>(false)
    const [showAdd, setShowAdd] = useState<boolean>(false)

    const {id, goals} = specifiGroup

    const {checkUserInGroup, isUserInGroup} = useGroup()

    const toggleAdd = () => {
        setShowAdd(!showAdd)
    }

    useEffect(() => {
        if (goals) {
            setHasGoals(goals.length > 0)
        }

        checkUserInGroup()
    }, [goals])

    return (
        <>
            <Container hasGoals={hasGoals}>
                <main className="goals__container">{hasGoals ? goals.map((goal) => <GroupGoalsCard key={goal.id} goal={goal} />) : <EmptyCardInfo goals />}</main>
                <footer className="goals__container">
                    {hasGoals && <TitleCounter content={goals} name="Meta" />}
                    {isUserInGroup && <Button onClick={toggleAdd}>Adicionar meta</Button>}
                </footer>
            </Container>
            {showAdd && <Modal onClick={toggleAdd} />}
            {showAdd && <GroupGoalsAdd toggleAdd={toggleAdd} groupId={id} />}
        </>
    )
}
