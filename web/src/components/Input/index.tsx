import React, { InputHTMLAttributes, useRef, useState, useCallback, useEffect } from 'react';
import { useField } from '@unform/core';
import { Container, ToggleView, ErrorMessage } from './styles';
import { FiEye, FiEyeOff } from 'react-icons/fi';

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

  const handleStopHoveringInput = useCallback(() => {
    setIsHovered(false);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleToggleView = useCallback(() => {
    setIsVisible(state => !state);
  }, []);


  return (
    <Container
      onMouseOver={handleHoverInput}
      onMouseLeave={handleStopHoveringInput}
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
          onBlur={handleInputBlur}
          onFocus={handleInputFocus}
          autoComplete="off"
          type={
            type === 'password'
              ? isVisible
                ? 'text'
                : 'password'
              : type || 'text'
          }
          {...rest}
        />
        {type === 'password' && (
          <ToggleView type="button" onClick={handleToggleView}>
            {isVisible ? <FiEyeOff size={22} /> : <FiEye size={22} />}
          </ToggleView>
        )}
      </div>
      <ErrorMessage hasError={!!error} isHovered={isHovered}>
        <div>{error}</div>
      </ErrorMessage>
    </Container>
  );
};

export default Input;
