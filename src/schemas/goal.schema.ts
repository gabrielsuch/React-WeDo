import * as yup from "yup"


export const createGoalSchema = yup.object({}).shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório").nullable()
})


export const updateGoalSchema = yup.object({}).shape({
    title: yup.string().required("Campo obrigatório"),
    difficulty: yup.string().required("Campo obrigatório").nullable()
})