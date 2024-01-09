import {createContext, useContext, useState, ReactNode} from "react"
import {useHistory} from "react-router-dom"
import {toast} from "react-toastify"

import {api} from "../../services/api"

import {useAuth} from "../Auth/index"

interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    myGroups: any[]
    hasMyGroups: any[]
    specifiGroup: {}
    akuma: boolean
    isUserInGroup: boolean
    subOn: (id: any) => Promise<void>
    subOff: (id: any) => Promise<void>
    loadMyGroups: () => Promise<void>
    loadGroup: (id: any) => Promise<void>
    checkUserInGroup: () => void
}

const GroupContext = createContext({} as ContextData)

export const GroupProvider = ({children}: ChildrenProps) => {
    const [myGroups, setMyGroups] = useState([])
    const [hasMyGroups, setHasMyGroups] = useState([])
    const [specifiGroup, setSpecifiGroup] = useState({})
    const [isUserInGroup, setIsUserInGroup] = useState(false)
    const [akuma, setAkuma] = useState(false)

    const {access, user} = useAuth()

    const history = useHistory()

    const sub = (x: any): void => {
        const legacy = !!x.find((value: any) => value.id === user.user_id)
        setAkuma(!legacy)
    }

    const subOn = async (id: any): Promise<void> => {
        try {
            await api.post(`/groups/${id}/subscribe`, null, {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            })

            loadGroup(id)

            toast.success("Inscrição realizada com sucesso")
        } catch (err) {
            console.error(err)
            toast.error("Erro ao se inscrever")
        }
    }

    const subOff = async (id: any): Promise<void> => {
        try {
            await api.delete(`/groups/${id}/unsubscribe/`, {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            })

            loadGroup(id)

            toast.success("Desinscrição realizada com sucesso")
        } catch (err) {
            console.error(err)
            toast.error("Erro ao se desinscrever")
        }
    }

    const loadMyGroups = async (): Promise<void> => {
        try {
            const response = await api.get("/groups/subscriptions", {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            })

            setMyGroups(response.data)
            setHasMyGroups(!!response.data.length)
        } catch (err) {
            console.error(err)
        }
    }

    const loadGroup = async (id: any): Promise<void> => {
        try {
            const response = await api.get(`/groups/${id}`, {
                headers: {
                    Authorization: `Bearer ${access}`
                }
            })

            sub(response.data.users_on_group)
            setSpecifiGroup(response.data)

            history.push(`/group/${id}`)
        } catch (err) {
            console.error(err)
        }
    }

    const checkUserInGroup = (): void => {
        const {user_id} = user
        const {users_on_group} = specifiGroup
        const userInGroup = !!users_on_group.find(({id}) => id === user_id)
        setIsUserInGroup(userInGroup)
    }

    return (
        <GroupContext.Provider
            value={{
                myGroups,
                hasMyGroups,
                loadMyGroups,
                loadGroup,
                specifiGroup,
                akuma,
                subOn,
                subOff,
                checkUserInGroup,
                isUserInGroup
            }}
        >
            {children}
        </GroupContext.Provider>
    )
}

export const useGroup = () => useContext(GroupContext)
