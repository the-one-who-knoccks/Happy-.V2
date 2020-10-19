import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { Container, BackgroundImage, ContentWrapper, Form, Options, BottomItems } from './styles';
import happyLogo from '../../images/logo_signin.svg'

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import CheckBox from '../../components/CheckBox/index';


const Login: React.FC = () => {
  const formRef = useRef<FormHandles | null>(null);
  return (
    <Container>
      <BackgroundImage>
        <img src={happyLogo} alt="happy" />
      </BackgroundImage>
      <ContentWrapper>
        <Form ref={formRef} onSubmit={() => { }}>
          <h1>Fazer login</h1>
          <Input name="email" label="email" type="email" />
          <Input name="password" label="Senha" type="password" />
          <Options>
            <CheckBox name="rememberMe" type="checkbox" label="Lembrar-me" />
            <Link to="/forgot-password">Esqueci minha senha</Link>
          </Options>
          <Button containerStyle={{ marginTop: 15 }}
          >
            Entrar
        </Button>

        </Form>
        <BottomItems>
          <p>
            Não tem conta?
            <Link to="/register">Cadastre-se</Link>
          </p>
          <span>
            Não custa nada
            <span role="img" aria-label="Purple heart">
              💜
            </span>
          </span>
        </BottomItems>
      </ContentWrapper>
    </Container>
  );
}

export default Login
