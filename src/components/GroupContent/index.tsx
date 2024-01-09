import {useEffect} from "react"

import {Main, GroupTitle, Footer} from "./style"

import {useNavigate, useParams} from "react-router-dom"

import {Activity} from "../../components/GroupInteract"
import {GroupMenu} from "../../components/GroupMenu"
import {GroupInfo} from "../../components/GroupInfo"
import {GroupGoals} from "../GroupGoals"
import {Button} from "../../components/Button"
import {GroupUserContainer} from "../../components/GroupUserContainer"

import {useGroup} from "../../providers/Groups"

export const GroupContent = ({selectedOption, setSelectedOption}: any) => {
    const showInfo = selectedOption === "Info"
    const showGoals = selectedOption === "Metas"
    const showActivity = selectedOption === "Atividades"
    const showUsers = selectedOption === "Usuários"

    const {id} = useParams()
    const navigate = useNavigate()

    const {loadGroup, specifiGroup, akuma, subOn, subOff} = useGroup()

    const {name, category} = specifiGroup

    useEffect(() => {
        loadGroup(id)
    }, [id])

    return (
        <Main>
            <GroupTitle>
                <h2>{name}</h2>
                <div className="category">
                    <p>{category}</p>
                </div>
            </GroupTitle>
            <GroupMenu selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            <main className="groupContent__container">
                {showInfo && <GroupInfo specifiGroup={specifiGroup} />}
                {showGoals && <GroupGoals specifiGroup={specifiGroup} />}
                {showActivity && <Activity specifiGroup={specifiGroup} />}
                {showUsers && <GroupUserContainer specifiGroup={specifiGroup} />}
            </main>
            <Footer>
                {akuma ? <Button onClick={() => subOn(Number(id))}>Inscrever-se</Button> : <Button onClick={() => subOff(Number(id))}>Desinscrever</Button>}

                <Button onClick={() => navigate("/groups")}>Voltar</Button>
            </Footer>
        </Main>
    )
}
