import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {HiOutlineKey, HiOutlineMail} from 'react-icons/hi';
import Input from '../../components/inputs/Input';
import {
  Container,
  Content,
  FooterLinks,
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
  const [checkAuth, setCheckAuth] = useState<boolean>();
  const history = useHistory();

  const handleSubmit = () => {
    userAuthenticate(login, password).then((response: any) => {
      setCheckAuth(response.data.success);
      if (response.data.success) history.push('/home');
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
          {checkAuth === false && <p>Senha incorreta</p>}
          <Button
            onClickSubmit={handleSubmit}
            type="submit"
            text="Entrar"
            full
            color="#ff7a91"
            backgroundColor="#ff4e6d"
          />
        </LoginForm>
        <ForgotAccount>
          <p>
            <FooterLinks to="/reset-password">Esqueceu a senha?</FooterLinks>
          </p>
          <p>
            <FooterLinks to="/signup">Criar nova conta</FooterLinks>
          </p>
        </ForgotAccount>
      </Content>
    </Container>
  );
};

export default Login;
