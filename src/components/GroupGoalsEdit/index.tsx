import {useEffect} from "react"

import {Container} from "./style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {Input, InputRadio, InputRadioContainer} from "../Input/index"
import {Button} from "../Button/index"

import {updateGoalSchema} from "../../schemas/goal.schema"
import {TUpdateGoal} from "../../types/goal.type"

import {useGoals} from "../../providers/Goals"

export const GroupGoalsEdit = ({goalId, groupId, toggleEdit, toggleShowDelete}: any) => {
    const {getGoal, updateGoal} = useGoals()

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm<TUpdateGoal>({
        resolver: yupResolver(updateGoalSchema)
    })

    useEffect(() => {
        getGoal(goalId, reset)
    }, [])

    const onSubmit = (data: any) => {
        updateGoal(data, goalId, groupId, toggleEdit)
    }

    return (
        <Container>
            <h2>Editar meta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="inputs">
                    <Input isEmpty={false} register={register} errors={errors} name="title" placeholder="Título" />
                    <InputRadioContainer register={register} errors={errors} name="difficulty" title="Dificuldade">
                        <InputRadio register={register} name="difficulty" label="Muito Fácil" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Fácil" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Médio" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Difícil" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Muito Difícil" sizeBigger />
                    </InputRadioContainer>
                </section>
                <footer>
                    <Button type="submit">Atualizar</Button>
                    <Button type="button" secondary onClick={toggleShowDelete}>
                        Deletar
                    </Button>
                </footer>
            </form>
        </Container>
    )
}
