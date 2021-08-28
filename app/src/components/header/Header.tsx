import React from 'react';
import {HiOutlineLogout} from 'react-icons/hi';
import {
  Container,
  Content,
  LeftItemsContainer,
  NavbarItems,
  NavbarItemsRight,
  RightItemsContainer,
  Logout,
  MenuLinks,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftItemsContainer>
          <MenuLinks to="/">
            <NavbarItems>Menu</NavbarItems>
          </MenuLinks>
          <MenuLinks to="/">
            <NavbarItems>Tarefas</NavbarItems>
          </MenuLinks>
          <MenuLinks to="/">
            <NavbarItems>Histórico</NavbarItems>
          </MenuLinks>
        </LeftItemsContainer>
        <RightItemsContainer>
          <Logout to="/">
            <NavbarItemsRight>Sair</NavbarItemsRight>
            <HiOutlineLogout size="40px" />
          </Logout>
        </RightItemsContainer>
      </Content>
    </Container>
  );
};

export default Header;
