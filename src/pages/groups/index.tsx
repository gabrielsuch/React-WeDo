import {useState, useEffect} from "react"
import {Div, Cabecalho, Footer} from "./style"

import {useAuth} from "../../providers/Auth"
import {api} from "../../services/api"

import {Header} from "../../components/Header"
import {RenderGroups} from "../../components/RenderGroups"
import {FindGroups} from "../../components/FindGroups"
import {ContainerGroupNone} from "../../components/ContainerGroupNone"
import {GroupsCreate} from "../../components/GroupsCreate"
import {Button} from "../../components/Button"

import {useNavigate} from "react-router-dom"

import {Container} from "../../components/GroupsContainer/style"

export const Groups = () => {
    const [groups, setGroups] = useState([])
    const [input, setInput] = useState("")
    const [groupInput, setGroupInput] = useState([])
    const [page, setPage] = useState(1)
    const [modal, setModal] = useState(false)

    const {access} = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        api.get(`groups/?page=${page}`, {
            headers: {Authorization: `Bearer ${access}`}
        })
            .then((response) => {
                const newGroups = response.data.results

                setGroups([...groups, ...newGroups])
            })
            .catch((err) => console.log(err))
    }, [page])

    return (
        <>
            <Header />
            <Div>
                <Container className="container">
                    <Cabecalho>
                        <div className="flex">
                            <h2>Grupos</h2>
                        </div>
                        <FindGroups
                            placeholder="Pesquisar Grupos..."
                            type="text"
                            input={input}
                            setInput={setInput}
                            groupInput={groupInput}
                            setGroupInput={setGroupInput}
                        />
                    </Cabecalho>
                    {groups.length === 0 ? (
                        <ContainerGroupNone />
                    ) : (
                        <RenderGroups
                            groups={groups}
                            setGroups={setGroups}
                            groupInput={groupInput}
                            input={input}
                            page={page}
                            setPage={setPage}
                        />
                    )}
                    <Footer>
                        <Button
                            secondary
                            onClick={() => navigate("/dashboard")}
                        >
                            Voltar
                        </Button>
                        <Button
                            className="redButtom"
                            onClick={() => setModal(true)}
                        >
                            Criar Grupo
                        </Button>
                    </Footer>
                </Container>
                {modal ? (
                    <GroupsCreate modal={modal} setModal={setModal} />
                ) : null}
            </Div>
        </>
    )
}
