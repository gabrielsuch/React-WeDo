import * as yup from "yup"

import {createUserSchema, updateUserSchema, loginSchema} from "../schemas/user.schema"


export type TCreateUser = yup.InferType<typeof createUserSchema>
export type TUpdateUser = yup.InferType<typeof updateUserSchema>
export type TLogin = yup.InferType<typeof loginSchema>