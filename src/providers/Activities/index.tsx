import React, {createContext, useContext, ReactNode, useState} from "react"
import {toast} from "react-toastify"

import {api} from "../../services/api"

import {useAuth} from "../Auth/index"
import {useGroup} from "../Groups/index"

import {formattedDate, requisitionDate} from "../../components/Input/Utility/formatter"

interface ChildrenProps {
    children: ReactNode
}

interface ContextData {
    activities: any[]
    loadActivities: () => Promise<void>
    addActivity: (data: any, groupId: any) => Promise<void>
    deleteActivity: (id: any) => Promise<void>
    updateActivity: (id: any, data: any, setOpenModalEdit: any) => Promise<void>
    restoreInfos: (id: any, reset: any) => Promise<void>
    setActivities: React.Dispatch<React.SetStateAction<any[]>>
}


const ActivitiesContext = createContext({} as ContextData)

export const ActivitiesProvider = ({children}: ChildrenProps) => {
  const [activities, setActivities] = useState<any[]>([])

  const { specifiGroup } = useGroup()
  const { access } = useAuth()
  
  const groupId = specifiGroup.id

  const loadActivities = async (): Promise<void> => {
    try {
        const response = await api.get(`activities/?group=${groupId}`)

        setActivities(response.data.results)
        
    } catch(err) {
        console.error(err)
    }
  }

  const addActivity = async (data: any, groupId: any): Promise<void> => {
    data.group = groupId

    const { realization_time } = data

    const newDate = requisitionDate(realization_time)
    data.realization_time = newDate

    formattedDate(new Date(newDate))

    try {
        const response = await api.post("activities/", data, {
            headers: { 
                Authorization: `Bearer ${access}`
            }
        })

        setActivities([...activities, response.data])

        toast.success("Atividade criada!")

    } catch(err) {
        console.error(err)
        toast.error("Não foi possível criar a atividade")
    }
  }

  const deleteActivity = async (id: any): Promise<void> => {
    try {
        await api.delete(`activities/${id}`, {
            headers: { 
                Authorization: `Bearer ${access}`
            }
        })

        // TROCAR ESSA LOGICA
        loadActivities()

        toast.success("Atividade excluída!")

    } catch(err) {
        console.error(err)
        toast.error("Erro na exclusão da atividade")
    }
  }

  const updateActivity = async (id: any, data: any, setOpenModalEdit: any): Promise<void> => {
    const { realization_time } = data
    const [day, month, year] = realization_time.split("/")
    const newDateFormat = `${year}-${month}-${day}`
    const newDate = new Date(newDateFormat).toISOString()
    data.realization_time = newDate

    requisitionDate(realization_time)

    try {
        await api.patch(`activities/${id}/`, data, {
            headers: {
                Authorization: `Bearer ${access}`
            }
        })

        loadActivities()
        setOpenModalEdit(false)
        toast.success("Atividade editada com sucesso")

    } catch(err) {
        console.error(err)
        toast.error("Erro ao editar atividade")
    }
  }

  const restoreInfos = async (id: any, reset: any): Promise<void> => {
    try {
        const response = await api.get(`activities/${id}/`, {
            headers: {
                Authorization: `Bearer ${access}` 
            }
        })

        const { title, realization_time } = response.data

        const newDate = formattedDate(new Date(realization_time))

        reset({
          title: title,
          realization_time: newDate,
        })
        
    } catch(err) {
        console.error(err)
    }
  }

  return (
    <ActivitiesContext.Provider value={{activities, addActivity, deleteActivity, setActivities, updateActivity, loadActivities, restoreInfos}}>
        {children}
    </ActivitiesContext.Provider>
  )
}

export const useActivities = () => useContext(ActivitiesContext)