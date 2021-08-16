import React from "react";
import Input from "../../components/inputs/Input";
import {Container, Content, LoginForm, LoginTitle, PageHeader} from "./styles";
import {HiOutlineKey, HiOutlineMail} from "react-icons/hi";
import Button from "../../components/buttons/Button";

const Login: React.FC = () => {
    return (
        <Container>
            <PageHeader target="_blank" href="https://github.com/ouwargui">VISITE MEU GITHUB</PageHeader>
            <Content>
                <LoginTitle>Faça seu login</LoginTitle>
                <LoginForm>
                    <Input icon={HiOutlineMail} type="text" title="Login" placeholder="nome@email.com"></Input>
                    <Input icon={HiOutlineKey} type="password" title="Senha" placeholder="Senha"></Input>
                    <Button text="Login" full={true}></Button>
                </LoginForm>
            </Content>
        </Container>
    )
}

export default Login;