import React from 'react';
import {Container} from './styles';

export interface ButtonParams {
  full: boolean;
  text: string;
  type?: string;
  onClickSubmit: () => any;
  color?: string;
  backgroundColor?: string;
}

const Button: React.FC<ButtonParams> = ({
  backgroundColor,
  color,
  full,
  text,
  onClickSubmit,
}) => {
  return (
    <Container
      onClick={() => onClickSubmit()}
      full={full}
      color={color}
      backgroundColor={backgroundColor}>
      {text}
    </Container>
  );
};

export default Button;
