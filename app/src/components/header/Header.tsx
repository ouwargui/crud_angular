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
            <NavbarItems>Home</NavbarItems>
          </MenuLinks>
          <MenuLinks to="/">
            <NavbarItems>Tasks</NavbarItems>
          </MenuLinks>
          <MenuLinks to="/">
            <NavbarItems>History</NavbarItems>
          </MenuLinks>
        </LeftItemsContainer>
        <RightItemsContainer>
          <Logout to="/">
            <NavbarItemsRight>Sign out</NavbarItemsRight>
            <HiOutlineLogout size="40px" />
          </Logout>
        </RightItemsContainer>
      </Content>
    </Container>
  );
};

export default Header;
