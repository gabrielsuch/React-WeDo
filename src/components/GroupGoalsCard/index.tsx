import {useState} from "react"

import {Container} from "./style"

import {AchievedBackgroundCounter} from "../AchievedBackgroundCounter/index"
import {Button, IconButton} from "../Button/index"
import {DeleteConfirmation} from "../DeleteConfirmation/index"
import {GroupGoalsCardModal} from "../GroupGoalsCardModal/index"
import {GroupGoalsEdit} from "../GroupGoalsEdit/index"
import {Modal} from "../Modal/index"

import {useGoals} from "../../providers/Goals/index"
import {useGroup} from "../../providers/Groups/index"


export const GroupGoalsCard = ({goal, open}: any) => {
    const [showCard, setShowCard] = useState<boolean>(false)
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [showDelete, setShowDelete] = useState<boolean>(false)

    const {isUserInGroup} = useGroup()
    const {updateGoal, goal: goalContext, removeGoal} = useGoals()

    const {id, title, difficulty, achieved, how_much_achieved, group} = open
        ? goalContext
        : goal

    const toggleCard = () => {
        setShowCard(!showCard)
    }

    const toggleEdit = () => {
        setShowEdit(!showEdit)
    }

    const toggleShowDelete = () => {
        setShowDelete(!showDelete)
        toggleEdit(showDelete)
    }

    const handleDelete = () => {
        removeGoal(id, group)
    }

    const handleCardClick = () => {
        if (open) {
            toggleEdit()
        } else {
            toggleCard()
        }
    }

    const maxTimesToAchieve = 10

    const completeGoals = () => {
        const data = { achieved, how_much_achieved }
        data.how_much_achieved += 1

        if (data.how_much_achieved >= maxTimesToAchieve) {
            data.achieved = true
        } else {
            data.achieved = false
        }

        return updateGoal(data, id, group, "", "achieved")
    }

    return (
        <>
            <Container open={open} isUserInGroup={isUserInGroup} achieved={achieved}>
                <p className="title">{title}</p>
                {open && (
                    <main className="groupGoalsCard__container">
                        <section>
                        <p className="content__title">Dificuldade</p>
                        <p className="content__value">{difficulty}</p>
                        </section>
                        <AchievedBackgroundCounter
                        achievedCount={how_much_achieved}
                        maxTimes={maxTimesToAchieve}
                        />
                        <Button onClick={() => completeGoals()}>Realizar tarefa</Button>
                    </main>
                )}
                <footer className="groupGoalsCard__container">
                    <section>
                        <p className="font__body">{achieved ? "Completo" : "Incompleto"}</p>
                    </section>
                    <IconButton onClick={handleCardClick} card primaryColor edit={open} arrowUp={!open}/>
                </footer>
            </Container>
            {(showCard || showEdit) && <Modal onClick={handleCardClick}/>}
            {showCard && <GroupGoalsCardModal goalId={id} groupId={group}/>}
            {showEdit && (
                <GroupGoalsEdit goalId={id} groupId={group} toggleEdit={toggleEdit} toggleShowDelete={toggleShowDelete}/>
            )}
            {showDelete && <Modal onClick={toggleShowDelete} />}
            {showDelete && (
                <DeleteConfirmation toggleShowDelete={toggleShowDelete} deleteFunction={handleDelete}/>
            )}
        </>
    )
}
