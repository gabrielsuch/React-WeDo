import {Container, Form} from "./style"

import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

import {Input, InputPassword} from "../../components/Input"
import {Button} from "../../components/Button"

import {useNavigate} from "react-router-dom"

import logoLogin from "../../assets/logoLogin.png"
import flowersLogin from "../../assets/flowersLogin.png"
import {AlreadyRegistered} from "../signup/style"

import {loginSchema} from "../../schemas/user.schema"
import {TLogin} from "../../types/user.type"

import {useAuth} from "../../providers/Auth"

export const Login = () => {
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<TLogin>({
        resolver: yupResolver(loginSchema)
    })

    const {signIn} = useAuth()

    const onSubmit = async (data: TLogin) => {
        await signIn(data)
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    placeholder="Username"
                    register={register}
                    name="username"
                    errors={errors}
                />
                <InputPassword
                    placeholder="Senha"
                    register={register}
                    name="password"
                    errors={errors}
                />
                <Button type="submit">Login</Button>
                <AlreadyRegistered>
                    <p className="font__body">
                        Não possui uma conta?{" "}
                        <span
                            className="span-redirect"
                            onClick={() => {
                                navigate("/signup")
                            }}
                        >
                            Cadastre-se
                        </span>
                    </p>
                </AlreadyRegistered>
                <img className="flower" src={flowersLogin} alt="flower" />
            </Form>
            <img className="image" src={logoLogin} alt="yoga" />
        </Container>
    )
}
