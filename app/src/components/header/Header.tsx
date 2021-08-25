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
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <LeftItemsContainer>
          <NavbarItems>Home</NavbarItems>
          <NavbarItems>Tasks</NavbarItems>
          <NavbarItems>History</NavbarItems>
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
