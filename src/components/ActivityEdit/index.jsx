import {Container} from "./style"
import {Modal} from "../Modal"
import {Input} from "../Input"
import {Button} from "../Button"

import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import {useContext} from "react"
import {ActivitiesContext} from "../../providers/Activities"
import { useEffect } from "react/cjs/react.development"

export const ActivityEdit = ({setOpenModalEdit, id}) => {

    const {deleteActivity, updateActivity, restoreInfos} = useContext(ActivitiesContext)

    const schema = yup.object().shape({
        title: yup.string().required("Campo Obrigatório"),
        realization_time: yup.string().required("Campo Obrigatório")
    })

    const {register, handleSubmit, reset, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })

    const handleEditActivity = (data) => {
        updateActivity(id, data)
    }

    useEffect(() => {
        restoreInfos(id, reset)
    }, [setOpenModalEdit])

    return (
        <>
            <Modal onClick={() => setOpenModalEdit(false)}/>
            <Container> 
                <h2>Editar Atividade</h2>
                <form onSubmit={handleSubmit(handleEditActivity)}>
                    <section className="inputs">
                        <Input register={register} errors={errors} name="title" placeholder="Título" isEmpty={false}/>
                        <input type="datetime-local" {...register("realization_time")}/>
                    </section>
                    <Button type="submit">Atualizar</Button>
                    <Button onClick={() => deleteActivity(id)}>Deletar</Button>
                </form>
            </Container>
        </>
    )
}