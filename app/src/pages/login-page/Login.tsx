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
import {userAuthenticate} from '../../services/user';

const Login: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [checkAuth, setCheckAuth] = useState(false);

  const handleSubmit = () => {
    userAuthenticate(login, password).then((response: any) => {
      setCheckAuth(response.data.success);
      console.log(checkAuth);
    });
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
            value={login}
            onValueChange={(value: any) => setLogin(value.target.value)}
            icon={HiOutlineMail}
            type="text"
            title="Login"
            placeholder="Email"
          />
          <Input
            value={password}
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
