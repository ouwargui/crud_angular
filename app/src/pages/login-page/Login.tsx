import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {HiOutlineKey, HiOutlineMail} from 'react-icons/hi';
import Input from '../../components/inputs/Input';
import {
  Container,
  Content,
  ForgotAccount,
  LoginForm,
  LoginTitle,
  PageHeader,
} from './styles';
import Button from '../../components/buttons/Button';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log(login);
    console.log(password);
  };

  return (
    <Container>
      <PageHeader target="_blank" href="https://github.com/ouwargui">
        VISITE MEU GITHUB
      </PageHeader>
      <Content>
        <LoginTitle>Faça seu login</LoginTitle>
        <LoginForm onSubmit={(e) => e.preventDefault()}>
          <Input
            onValueChange={(value: any) => setLogin(value.target.value)}
            icon={HiOutlineMail}
            type="text"
            title="Login"
            placeholder="Email"
          />
          <Input
            onValueChange={(value: any) => setPassword(value.target.value)}
            icon={HiOutlineKey}
            type="password"
            title="Senha"
            placeholder="Senha"
          />
          <Button onClickSubmit={handleSubmit} text="Entrar" full />
        </LoginForm>
        <ForgotAccount>
          <p>
            <Link to="/reset-password">Esqueceu a senha?</Link>
          </p>
          <p>
            <Link to="/signup">Criar nova conta</Link>
          </p>
        </ForgotAccount>
      </Content>
    </Container>
  );
};

export default Login;
