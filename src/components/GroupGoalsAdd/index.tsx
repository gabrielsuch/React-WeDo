import {Container} from "./style"

import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"

import {Button} from "../Button/index"
import {Input, InputRadioContainer, InputRadio} from "../Input/index"

import {createGoalSchema} from "../../schemas/goal.schema"

import {useGoals} from "../../providers/Goals/index"

export const GroupGoalsAdd = ({toggleAdd, groupId}: any) => {
    const {addGoal} = useGoals()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(createGoalSchema)
    })

    const onSubmit = (data: any) => {
        addGoal(data, groupId, toggleAdd)
    }

    return (
        <Container>
            <h2>Adicionar meta</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <section className="inputs">
                    <Input register={register} errors={errors} name="title" placeholder="Título" />
                    <InputRadioContainer register={register} errors={errors} name="difficulty" title="Dificuldade">
                        <InputRadio register={register} name="difficulty" label="Muito Fácil" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Fácil" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Médio" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Difícil" sizeBigger />
                        <InputRadio register={register} name="difficulty" label="Muito Difícil" sizeBigger />
                    </InputRadioContainer>
                </section>
                <Button type="submit">Adicionar</Button>
            </form>
        </Container>
    )
}
