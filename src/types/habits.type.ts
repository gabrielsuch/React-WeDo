import * as yup from "yup"

import {createHabitSchema, updateHabitSchema} from "../schemas/habits.schema"

export type TCreateHabit = yup.InferType<typeof createHabitSchema>
export type TUpdateHabit = yup.InferType<typeof updateHabitSchema>
