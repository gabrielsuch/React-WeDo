import {useState, createContext, useContext , ReactNode} from "react"
import jwt_decode from "jwt-decode"
import {toast} from "react-toastify"
import {useHistory} from "react-router-dom"

import {api} from "../../services/api"


interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    access: string | undefined
    user: any
    signIn: (data: any) => Promise<void>
    signOut: () => void
}


export const AuthContext = createContext({} as ContextData)

export const AuthProvider = ({children}: ChildrenProps) => {
    const [data, setData] = useState(() => {
        const access = localStorage.getItem("@WeDo:access")
        const user = localStorage.getItem("@WeDo:user")

        if(access && user) {
            return { 
                access, user: JSON.parse(user) 
            }
        }

        return {}
    })

    const history = useHistory()

    const signIn = async (data: any): Promise<void> => {
        try {
            const response = await api.post("sessions/", data)

            const {access} = response.data

            const user = jwt_decode(access)

            localStorage.setItem("@WeDo:access", access)
            localStorage.setItem("@WeDo:user", JSON.stringify(user))

            setData({access, user})
            history.push("/dashboard")

            toast.success("Login realizado com sucesso!")
            
        } catch(err) {
            console.error(err)
            toast.error("Email ou senha inválida")
        }
    }

    const signOut = (): void => {
        localStorage.removeItem("@WeDo:token")
        localStorage.removeItem("@WeDo:user")

        setData({})
    }

    return (
        <AuthContext.Provider value={{access: data.access, user: data.user, signIn, signOut}}>
        {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)