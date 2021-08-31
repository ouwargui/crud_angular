import styled from 'styled-components';

export const Container = styled.div``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContainer = styled.main`
  flex-grow: 1;
  display: grid;
  flex-direction: row;
  color: #9e89b8;
  grid-template-columns: repeat(4, auto);
  min-height: 350px;
`;

export const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  width: 100vw;
`;
