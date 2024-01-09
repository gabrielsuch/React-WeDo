import {useState, useEffect} from "react"
import {useParams} from "react-router-dom"

import {useActivities} from "../../providers/Activities"
import {useGroup} from "../../providers/Groups"

import {Button} from "../Button"
import {EmptyCardInfo} from "../EmptyCardInfo"
import {ActivityAdd} from "../ActivityAdd"
import {ActivityCard} from "../ActivityCard"

import {TitleCounter} from "../GroupContent/Utility"

import {Container} from "../GroupGoals/style"
import {Center, Container2} from "./style"

export const Activity = () => {
    const [openModal, setOpenModal] = useState(false)
    const {loadGroup, akuma} = useGroup()

    const {activities, loadActivities} = useActivities()

    const {id} = useParams()

    useEffect(() => {
        loadActivities()
    }, [])

    useEffect(() => {
        loadGroup(id)
    }, [id])

    return (
        <Container>
            <Center>
                {activities.length >= 1 ? (
                    activities.map((cardActivity, index) => (
                        <ActivityCard key={index} cardActivity={cardActivity} />
                    ))
                ) : (
                    <EmptyCardInfo activity />
                )}
            </Center>
            <div className="addEnd">
                <div className="fixText">
                    {activities.length >= 1 && (
                        <TitleCounter content={activities} name="Atividade" />
                    )}
                </div>
                {!akuma && (
                    <Button onClick={() => setOpenModal(true)}>
                        Adicionar Atividade
                    </Button>
                )}
            </div>
            {openModal && <ActivityAdd setOpenModal={setOpenModal} />}
        </Container>
    )
}

export const Users = () => {
    return (
        <Container2>
            <Center>
                <EmptyCardInfo user />
            </Center>
        </Container2>
    )
}
