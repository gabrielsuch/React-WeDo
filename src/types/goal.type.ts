import * as yup from "yup"

import {createGoalSchema, updateGoalSchema} from "../schemas/goal.schema"

export type TCreateGoal = yup.InferType<typeof createGoalSchema>
export type TUpdateGoal = yup.InferType<typeof updateGoalSchema>
