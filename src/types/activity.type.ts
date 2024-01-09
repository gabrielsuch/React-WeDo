import * as yup from "yup"

import {
    createActivitySchema,
    updateActivitySchema
} from "../schemas/activity.schema"

export type TCreateActivity = yup.InferType<typeof createActivitySchema>
export type TUpdateAcitivty = yup.InferType<typeof updateActivitySchema>
