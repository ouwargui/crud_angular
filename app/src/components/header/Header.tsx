import React from 'react';
import {
  Container,
  Content,
  LeftItemsContainer,
  NavbarItems,
  RightItemsContainer,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <RightItemsContainer>
          <NavbarItems>b</NavbarItems>
        </RightItemsContainer>
        <LeftItemsContainer>
          <NavbarItems>a</NavbarItems>
        </LeftItemsContainer>
      </Content>
    </Container>
  );
};

export default Header;
