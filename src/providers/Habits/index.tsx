import {createContext, useContext, useState, ReactNode} from "react"
import {toast} from "react-toastify"

import {api} from "../../services/api"

import {useAuth} from "../Auth/index"


interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    habits: any[]
    hasHabits: boolean
    loadHabits: () => Promise<void>
    updateHabit: (id: any, data: any, condition: any) => Promise<void>
    deleteHabit: (id: any) => Promise<void>
    habitEditInfo: (id: any, reset: any) => Promise<void>
    addHabit: (data: any) => Promise<void>
}


const HabitsContext = createContext({} as ContextData)

export const HabitsProvider = ({children}: ChildrenProps) => {
    const [habits, setHabits] = useState<any[]>([])
    const [hasHabits, setHasHabits] = useState(false)

    const {access, user} = useAuth()


    const loadHabits = async (): Promise<void> => {
        try {
            const response = await api.get("habits/personal", {
                headers: { 
                    Authorization: `Bearer ${access}` 
                }
            })

            const habits = response.data
            setHabits(habits)
            setHasHabits(!!habits.length)

        } catch(err) {
            console.error(err)
        }
    }

    const updateHabit = async (id: any, data: any, condition: any): Promise<void> => {
        try {
            await api.patch(`habits/${id}`, data, {
                headers: { 
                    Authorization: `Bearer ${access}` 
                }
            })

            condition === "achieved"
            ? toast.success("Hábito realizado!")
            : toast.success("Hábito editado com sucesso!")
            
        } catch(err) {
            console.error(err)

            condition === "achieved"
            ? toast.error("Não foi possível realizar.")
            : toast.error("Não foi possível editar.")
        }
    }

    const deleteHabit = async (id: any): Promise<void> => {
        try {
            await api.delete(`/habits/${id}`, {
                headers: { 
                    Authorization: `Bearer ${access}` 
                }
            })

            toast.success("Hábito excluído!")

        } catch(err) {
            console.error(err)
            toast.error("Não foi possível excluir")
        }
    }

    const habitEditInfo = async (id: any, reset: any): Promise<void> => {
        try {
            const response = await api.get(`habits/${id}/`, {
                headers: { 
                    Authorization: `Bearer ${access}` 
                }
            })

            const { title, category, frequency, difficulty } = response.data

            reset({title, category, frequency, difficulty})

        } catch(err) {
            console.error(err)
        }
    }

    const addHabit = async (data: any): Promise<void> => {
        data.achieved = false
        data.how_much_achieved = 0
        data.user = user.user_id

        try {
            const response = await api.post("habits/", data, {
                headers: { 
                    Authorization: `Bearer ${access}` 
                }
            })

            setHabits([...habits, response.data])

            toast.success("Hábito criado!")
            
        } catch(err) {
            console.error(err)
            toast.error("Não foi possível criar um hábito")
        }
    }

    return (
        <HabitsContext.Provider value={{habits, hasHabits, loadHabits, updateHabit, deleteHabit, habitEditInfo, addHabit}}>
            {children}
        </HabitsContext.Provider>
    )
}

export const useHabits = () => useContext(HabitsContext)