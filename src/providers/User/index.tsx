import {createContext, useContext, useState, ReactNode} from "react"
import {toast} from "react-toastify"

import {AxiosError} from "axios"
import {api} from "../../services/api"

import {useAuth} from "../Auth/index"


interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    userInfo: {}
    getUserInfo: () => Promise<void>
    handleUserEdit: (data: any, toggleEdit: any) => Promise<void>
}


const UserContext = createContext({} as ContextData)

export const UserProvider = ({children}: ChildrenProps) => {
    const [userInfo, setUserInfo] = useState({})

    const {user, access} = useAuth()

    const getUserInfo = async (): Promise<void> => {
        try {
            const response = await api.get(`/users/${user.user_id}/`)

            setUserInfo(response.data)
            
        } catch(err) {
            console.error(err)
        }
    }

    const handleUserEdit = async (data: any, toggleEdit: any): Promise<void> => {
        try {
            await api.patch(`/users/${user.user_id}/`, data, {
                headers: { 
                    Authorization: `Bearer ${access}` 
                }
            })

            toggleEdit()

            toast.success("Perfil atualizado!")

        } catch(err) {
            console.error(err)

            const { username } = err.response.data

            if(!!username) {
                toast.error("Um usuário com esse username já existe! Por favor, escolha outro!")
            } else {
                toast.error("Não foi possível atualizar o perfil")
            }
        }
    }

    return (
        <UserContext.Provider value={{userInfo, getUserInfo, handleUserEdit}}>
        {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
