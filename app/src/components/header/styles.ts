import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
`;

export const LeftItemsContainer = styled.div`
  display: flex;
  grid-column: 1;
  justify-content: flex-start;
  align-items: center;
  grid-row: 1;
`;

export const RightItemsContainer = styled.div`
  display: flex;
  grid-column: 2;
  justify-content: flex-end;
  align-items: center;
  grid-row: 1;
`;

export const NavbarItems = styled.span`
  padding: 0 50px;
  font-size: 1.5rem;
`;

export const NavbarItemsRight = styled.span`
  padding: 0 10px;
  font-size: 1.5rem;
`;

export const Logout = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  a:visited {
    text-decoration: none;
  }
`;
