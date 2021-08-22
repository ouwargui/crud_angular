import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #fbfbfb;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  border-radius: 5px;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
`;

export const RightItemsContainer = styled.div`
  display: flex;
  grid-column: 1;
  align-items: flex-start;
`;

export const LeftItemsContainer = styled.div`
  display: flex;
  grid-column: 2;
  align-items: flex-end;
`;

export const NavbarItems = styled.span``;
