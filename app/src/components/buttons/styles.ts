import styled from 'styled-components';

interface ButtonParams {
  full: boolean;
  color: string | undefined;
  backgroundColor: string | undefined;
}

export const Container = styled.button<ButtonParams>`
  width: ${(props) => (props.full ? '100%' : null)};
  min-width: 64px;
  border: 0;
  border-radius: 4px;
  padding: 8px 16px;
  outline: none;
  background-color: ${(props) => (props.color ? props.color : '#2f8bfd')};
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: 0.02857rem;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: ${(props) =>
      props.backgroundColor ? props.backgroundColor : '#0072f0'};
  }
`;
