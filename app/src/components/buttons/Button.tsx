import React from 'react';
import {Container} from './styles';

export interface ButtonParams {
  full: boolean;
  text: string;
  type?: string;
  onClickSubmit: () => any;
}

const Button: React.FC<ButtonParams> = ({full, text, onClickSubmit}) => {
  return (
    <Container onClick={() => onClickSubmit()} full={full}>
      {text}
    </Container>
  );
};

export default Button;
