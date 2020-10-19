import React, { InputHTMLAttributes, useRef, useEffect } from 'react';

import { CheckboxContainer } from './styles';
import { useField } from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Checkbox: React.FC<InputProps> = ({ label, type, name, ...rest }) => {
  const checkboxRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: checkboxRef.current,
      getValue: (ref: any) => {
        return ref.checked;
      },
    });
  }, [registerField, fieldName]);

  return (
    <CheckboxContainer>
      <input ref={checkboxRef} id={name} type="checkbox" {...rest} />
      <label htmlFor={name}>{label}</label>
    </CheckboxContainer>
  );
};

export default Checkbox;
