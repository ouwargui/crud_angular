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

interface HeaderParams {
  page: string;
}

const Header: React.FC<HeaderParams> = ({page}) => {
  return (
    <Container>
      <Content>
        <LeftItemsContainer>
          <MenuLinks isLinkDisabled={page === 'home'} to="/home">
            <NavbarItems>Home</NavbarItems>
          </MenuLinks>
          <MenuLinks isLinkDisabled={page === 'snkrs'} to="/">
            <NavbarItems>Sneakers</NavbarItems>
          </MenuLinks>
          <MenuLinks isLinkDisabled={page === 'sports'} to="/">
            <NavbarItems>Esportes</NavbarItems>
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
