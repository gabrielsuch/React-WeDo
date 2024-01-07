import {createContext, useContext, useState, ReactNode} from "react"
import {toast} from "react-toastify"

import {api} from "../../services/api"

import {useAuth} from "../Auth"
import {useGroup} from "../Groups"


interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    goal: {}
    addGoal: (data: any, groupId: any, toggleAdd: any) => Promise<void>
    removeGoal: (goalId: any, groupId: any) => Promise<void>
    getGoal: (goalId: any, reset: any) => Promise<void>
    updateGoal: (data: any, goalId: any, groupId: any, toggleEdit: any, condition: any) => Promise<void>
}


const GoalsContext = createContext({} as ContextData)

export const GoalsProvider = ({children}: ChildrenProps) => {
    const [goal, setGoal] = useState({})

    const {access} = useAuth()
    const {loadGroup, isUserInGroup} = useGroup()

    const addGoal = async (data: any, groupId: any, toggleAdd: any): Promise<void> => {
        data.how_much_achieved = 0
        data.achieved = false
        data.group = groupId

        if(isUserInGroup) {
            try {
                await api.post(`/goals/`, data, {
                    headers: { 
                        Authorization: `Bearer ${access}` 
                    }
                })

                loadGroup(groupId)
                toggleAdd()
                
                toast.success("Meta adicionada com sucesso!")

            } catch(err) {
                console.error(err)
            }

        } else {
            toast.error("Você precisa fazer parte do grupo para poder adicionar uma meta!")
        }
    }

    const removeGoal = async (goalId: any, groupId: any): Promise<void> => {
        if(isUserInGroup) {
            try {
                await api.delete(`/goals/${goalId}/`, {
                    headers: { 
                        Authorization: `Bearer ${access}` 
                    }
                })

                loadGroup(groupId)

                toast.success("Meta removida com sucesso!")

            } catch(err) {
                console.error(err)
            }
        } else {
            toast.error("Você precisa fazer parte do grupo para poder remover uma meta!")
        }
    }

    const getGoal = async (goalId: any, reset: any): Promise<void> => {
        try {
            const response = await api.get(`/goals/${goalId}/`, {
                headers: { 
                    Authorization: `Bearer ${access}` 
                }
            })

            setGoal(response.data)

            if(reset) {
                const { title, difficulty } = response.data
                reset({ title, difficulty })
            }

        } catch(err) {
            console.error(err)
        }
    }

    const updateGoal = async (data: any, goalId: any, groupId: any, toggleEdit: any, condition: any): Promise<void> => {
        if(isUserInGroup) {
            try {
                const response = await api.patch(`/goals/${goalId}/`, data, {
                    headers: { 
                        Authorization: `Bearer ${access}` 
                    }
                })

                if(condition === "achieved") {
                    toast.success("Meta realizada!")
                } else {
                    toggleEdit()
                    toast.success("Meta atualizada com sucesso!")
                }
    
                setGoal(response.data)
                loadGroup(groupId)

            } catch(err) {
                console.error(err)
            }
        } else {
            toast.error("Você precisa fazer parte do grupo para poder editar uma meta!")
        }
    }

    return (
        <GoalsContext.Provider value={{goal, addGoal, getGoal, updateGoal, removeGoal}}>
            {children}
        </GoalsContext.Provider>
    )
}

export const useGoals = () => useContext(GoalsContext)