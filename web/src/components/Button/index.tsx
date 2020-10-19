import React, { ButtonHTMLAttributes } from 'react';
// import ReactLoading from 'react-loading';

import { Container, LoadingContainer } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  containerStyle?: object;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  containerStyle,
  disabled = false,
  loading = false,
  children,
  ...rest
}) => {
  return (
    <Container style={containerStyle} disabled={disabled} {...rest}>
      {loading ? (
        <LoadingContainer>
          {/* <ReactLoading color="#fff" type="spin" width={40} height={40} /> */}
        </LoadingContainer>
      ) : (
        children
      )}
    </Container>
  );
};

export default Button;
