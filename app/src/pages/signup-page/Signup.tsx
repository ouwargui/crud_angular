import React, {useState} from 'react';
import {HiOutlineKey, HiOutlineMail, HiOutlineUser} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';
import {insertUser} from '../../services/user';
import {
  Container,
  Content,
  ForgotAccount,
  LoginForm,
  LoginTitle,
  PageHeader,
} from '../login-page/styles';
import {SignedTitle} from './styles';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkAuth, setCheckAuth] = useState<boolean>(false);
  const [checkEmail, setCheckEmail] = useState<boolean>();

  const handleSubmit = () => {
    setCheckEmail(true);
    setCheckAuth(true);
    insertUser(name, email, password).then((response: any) => {
      setCheckAuth(response.data.success);
      setCheckEmail(response.data.success);
    });
  };

  const renderPage = () => {
    if (!checkAuth) {
      return (
        <>
          <PageHeader target="_blank" href="https://github.com/ouwargui">
            VISITE MEU GITHUB
          </PageHeader>
          <Content>
            <LoginTitle>Faça seu cadastro</LoginTitle>
            <LoginForm onSubmit={(e) => e.preventDefault()}>
              <Input
                value={name}
                icon={HiOutlineUser}
                onValueChange={(value: any) => setName(value.target.value)}
                type="text"
                title="Nome completo"
                placeholder="Guilherme Santos"
              />
              <Input
                value={email}
                icon={HiOutlineMail}
                onValueChange={(value: any) => setEmail(value.target.value)}
                type="text"
                title="Login"
                placeholder="Email"
              />
              {checkEmail === false && <p>Este email já está cadastrado</p>}
              <Input
                value={password}
                icon={HiOutlineKey}
                onValueChange={(value: any) => setPassword(value.target.value)}
                type="password"
                title="Senha"
                placeholder="Senha"
              />
              <Button
                onClickSubmit={handleSubmit}
                type="submit"
                text="Cadastrar"
                full
              />
            </LoginForm>
            <ForgotAccount>
              <Link to="/">Já tem uma conta?</Link>
            </ForgotAccount>
          </Content>
        </>
      );
    }
    return (
      <>
        <PageHeader target="_blank" href="https://github.com/ouwargui">
          VISITE MEU GITHUB
        </PageHeader>
        <Content>
          <LoginTitle>Cadastro realizado com sucesso</LoginTitle>
          <SignedTitle>
            <Link to="/">Clique aqui para fazer o login</Link>
          </SignedTitle>
        </Content>
      </>
    );
  };

  return <Container>{renderPage()}</Container>;
};

export default Signup;
