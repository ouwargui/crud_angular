import React, {useState} from 'react';
import {HiOutlineKey, HiOutlineMail} from 'react-icons/hi';
import {Link, useHistory} from 'react-router-dom';
import Button from '../../components/buttons/Button';
import Input from '../../components/inputs/Input';
import {userUpdatePassword} from '../../services/user';
import {
  Container,
  Content,
  ForgotAccount,
  LoginForm,
  LoginTitle,
  PageHeader,
} from '../login-page/styles';

const ForgotPassword: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');
  const [checkAuth, setCheckAuth] = useState<boolean>();
  const [checkPassword, setCheckPassword] = useState<boolean>();
  const history = useHistory();

  const handleSubmit = () => {
    setCheckAuth(true);
    if (password === passwordAgain) {
      setCheckPassword(true);
      userUpdatePassword(login, password).then((response: any) => {
        setCheckAuth(response.data.success);
        if (response.data.success) history.push('/');
      });
    } else {
      setCheckPassword(false);
    }
  };

  return (
    <Container>
      <PageHeader target="_blank" href="https://github.com/ouwargui">
        VISITE MEU GITHUB
      </PageHeader>
      <Content>
        <LoginTitle>Redefina sua senha</LoginTitle>
        <LoginForm onSubmit={(e) => e.preventDefault()}>
          <Input
            value={login}
            onValueChange={(value: any) => setLogin(value.target.value)}
            icon={HiOutlineMail}
            type="text"
            title="Login"
            placeholder="Email"
          />
          {checkAuth === false && <p>Email não encontrado</p>}
          <Input
            value={password}
            onValueChange={(value: any) => setPassword(value.target.value)}
            icon={HiOutlineKey}
            type="password"
            title="Nova senha"
            placeholder="Senha"
          />
          <Input
            value={passwordAgain}
            onValueChange={(value: any) => setPasswordAgain(value.target.value)}
            icon={HiOutlineKey}
            type="password"
            title="Confirme a senha"
            placeholder="Senha"
          />
          {checkPassword === false && <p>As senhas não são iguais</p>}
          <Button
            onClickSubmit={handleSubmit}
            type="submit"
            text="Redefinir"
            full
          />
        </LoginForm>
        <ForgotAccount>
          <Link to="/">Lembrou a senha?</Link>
        </ForgotAccount>
      </Content>
    </Container>
  );
};

export default ForgotPassword;
