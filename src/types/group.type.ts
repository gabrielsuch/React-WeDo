import * as yup from "yup"

import {createGroupSchema, updateGroupSchema} from "../schemas/group.schema"


export type TCreateGroup = yup.InferType<typeof createGroupSchema>
export type TUpdateGroup = yup.InferType<typeof updateGroupSchema>