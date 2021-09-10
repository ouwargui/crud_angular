import styled from 'styled-components';

export const Container = styled.div``;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100vw;
  height: calc(100vh - 60px);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 90%;
  width: 95%;
  border-radius: 5px;
  padding: 50px;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
`;

export const ImageContainer = styled.div`
  width: 50%;
`;

export const SneakerImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const DetailsContainer = styled.div`
  display: grid;
  grid-template-rows: auto;
  width: 50%;
`;

export const SneakerName = styled.div`
  font-size: 2rem;
`;

export const SneakerBrand = styled.div`
  padding-top: 20px;
  font-size: 1.5rem;
`;
