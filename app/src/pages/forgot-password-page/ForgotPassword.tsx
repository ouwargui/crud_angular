import React from 'react';
import {HiOutlineKey, HiOutlineMail} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';
import {
  Container,
  Content,
  ForgotAccount,
  LoginForm,
  LoginTitle,
  PageHeader,
} from '../login-page/styles';

const ForgotPassword: React.FC = () => {
  return (
    <Container>
      <PageHeader target="_blank" href="https://github.com/ouwargui">
        VISITE MEU GITHUB
      </PageHeader>
      <Content>
        <LoginTitle>Redefina sua senha</LoginTitle>
        <LoginForm>
          {/* <Input icon={HiOutlineMail} type="text" title="Login" placeholder="Email"></Input>
                    <Input icon={HiOutlineKey} type="password" title="Nova senha" placeholder="Senha"></Input>
                    <Input icon={HiOutlineKey} type="password" title="Confirme a senha" placeholder="Senha"></Input>
                    <Button type="submit" text="Redefinir" full={true}></Button> */}
        </LoginForm>
        <ForgotAccount>
          <Link to="/">Lembrou a senha?</Link>
        </ForgotAccount>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
