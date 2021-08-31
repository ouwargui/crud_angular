import styled from 'styled-components';

export const Container = styled.div``;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto max-content auto;
  grid-auto-rows: 1fr;
`;

export const Content = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  padding: 10px;
`;
