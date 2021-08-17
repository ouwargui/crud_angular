import React from 'react';
import {IconType} from 'react-icons/lib';
import {InputGroup, InputTitle, StyledInput} from './styles';

export interface InputParams {
  title?: string;
  placeholder?: string;
  type?: string;
  icon: IconType;
  onValueChange: any;
}

const Input: React.FC<InputParams> = ({
  icon,
  title,
  type,
  placeholder,
  onValueChange,
}) => {
  return (
    <InputGroup>
      <InputTitle>
        {React.createElement(icon)} {title}
      </InputTitle>
      <StyledInput
        onChange={(newValue) => onValueChange(newValue)}
        type={type}
        placeholder={placeholder}
      />
    </InputGroup>
  );
};

export default Input;
