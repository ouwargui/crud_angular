import React from "react";
import Input from "../../components/inputs/Input";
import {Container, Content, ForgotAccount, LoginForm, LoginTitle, PageHeader} from "./styles";
import {HiOutlineKey, HiOutlineMail} from "react-icons/hi";
import Button from "../../components/buttons/Button";
import {Link} from "react-router-dom";

const Login: React.FC = () => {
    return (
        <Container>
            <PageHeader target="_blank" href="https://github.com/ouwargui">VISITE MEU GITHUB</PageHeader>
            <Content>
                <LoginTitle>Faça seu login</LoginTitle>
                <LoginForm>
                    <Input icon={HiOutlineMail} type="text" title="Login" placeholder="Email"></Input>
                    <Input icon={HiOutlineKey} type="password" title="Senha" placeholder="Senha"></Input>
                    <Button type="submit" text="Entrar" full={true}></Button>
                </LoginForm>
                <ForgotAccount>
                    <p><Link to="/reset-password">Esqueceu a senha?</Link></p>
                    <p><Link to="/signup">Criar nova conta</Link></p>
                </ForgotAccount>
            </Content>
        </Container>
    )
}

export default Login;