import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 450px;
  border-radius: 5px;
  padding: 50px;
  margin-bottom: 40px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
`;

export const LoginForm = styled.form`
  text-align: center;
  align-items: center;
  p {
    padding-bottom: 20px;
    font-size: 14px;
    color: red;
  }
`;

export const LoginTitle = styled.h2`
  font-weight: 500;
  margin-bottom: 50px;
`;

export const PageHeader = styled.a`
  font-size: 2rem;
  font-weight: 600;
  margin: 40px 0;
  color: inherit;

  &:hover {
    color: #ff7a91;
  }
`;

export const ForgotAccount = styled.span`
  display: block;
  margin-top: 40px;
  color: #888888;
  font-size: 14px;
  p {
    padding: 10px;
  }
`;

export const FooterLinks = styled(Link)`
  color: #333;
  text-decoration: none;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    color: #ff7a91;
  }
`;
