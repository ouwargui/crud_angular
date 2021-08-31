import {Link} from 'react-router-dom';
import styled from 'styled-components';

interface MenuLinksParams {
  isLinkDisabled: boolean;
}

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
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
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
  text-decoration: none;
  color: #333;
  padding-right: 10px;

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: #ff7a91;
    color: #ff7a91;
  }
`;

export const MenuLinks = styled(Link)<MenuLinksParams>`
  color: #333;
  text-decoration: none;

  pointer-events: ${(props) => (props.isLinkDisabled ? 'none' : 'full')};

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &:hover {
    text-decoration: #ff7a91;
    color: #ff7a91;
  }
`;
