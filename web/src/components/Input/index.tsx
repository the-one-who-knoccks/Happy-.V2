import React, { InputHTMLAttributes, useRef, useState, useCallback, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container } from './styles';
// import { FiEye, FiEyeOff } from 'react-icons/fi';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  containerStyle?: object;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  containerStyle?: object;
}


const Input: React.FC<InputProps> = ({
  containerStyle,
  label,
  type,
  name,
  defaultValue: propDefaultValue,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);


  const { fieldName, error, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
    setIsFilled(!!inputRef.current?.value);
  }, [fieldName, registerField]);

  const handleHoverInput = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  return (
    <Container
      onMouseOver={handleHoverInput}
      onMouseLeave={() =>{}}
      htmlFor={name}
      type={type}
      isFilled={isFilled}
      isFocused={isFocused}
      hasError={!!error}
      hasValueInProps={!!propDefaultValue}
      style={containerStyle}
    >
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          id={name}
          ref={inputRef}
          defaultValue={propDefaultValue || defaultValue}
          onBlur={() => {}}
          onFocus={() => {}}
          autoComplete="off"

        />
      </div>
    </Container>
  );
};

export default Input;
