import React from 'react';
import {Container, Content, MainContainer, MainContent} from './styles';

import Header from '../../components/header/Header';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>
        <MainContainer>
          <MainContent>a</MainContent>
        </MainContainer>
      </Content>
    </Container>
  );
};

export default Home;
