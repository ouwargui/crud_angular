import React from "react";
import {HiOutlineKey, HiOutlineMail, HiOutlineUser} from "react-icons/hi";
import {Link} from "react-router-dom";
import Button from "../../components/buttons/Button";
import Input from "../../components/inputs/Input";
import {Container, Content, ForgotAccount, LoginForm, LoginTitle, PageHeader} from "../login-page/styles";

const Signup: React.FC = () => {
    return (
        <Container>
            <PageHeader target="_blank" href="https://github.com/ouwargui">VISITE MEU GITHUB</PageHeader>
            <Content>
                <LoginTitle>Faça seu cadastro</LoginTitle>
                <LoginForm>
                    <Input icon={HiOutlineUser} type="text" title="Nome completo" placeholder="John Doe"></Input>
                    <Input icon={HiOutlineMail} type="text" title="Login" placeholder="Email"></Input>
                    <Input icon={HiOutlineKey} type="password" title="Senha" placeholder="Senha"></Input>
                    <Button type="submit" text="Cadastrar" full={true}></Button>
                </LoginForm>
                <ForgotAccount>
                    <Link to="/">Já tem uma conta?</Link>
                </ForgotAccount>
            </Content>
        </Container>
    )
}

export default Signup;