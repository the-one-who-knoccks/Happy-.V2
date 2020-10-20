import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import { Container, BackgroundImage, ContentWrapper, Form, BottomItems, Location } from './styles';
import logoImg from '../../images/logo.svg';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import CheckBox from '../../components/CheckBox/index';


const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles | null>(null);
  return (
    <Container>
      <BackgroundImage>
      <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças. </p>
        </main>
        <Location>
          <strong>Volta Grande</strong>
          <span>Minas Gerais</span>
        </Location>
      </BackgroundImage>
      <ContentWrapper>

        <Form ref={formRef} onSubmit={() => { }}>
          <h1>Cadastre-se</h1>
          <p>Por favor, preencha os dados abaixo.</p>
          <Input name="name" label="Nome" type="text"/>
          <Input name="email" label="E-mail"  type="email" />
          <Input name="password" label="Senha" type="password" />

          <Button containerStyle={{ marginTop: 15 }}
          >
            Entrar
        </Button>

        </Form>
        <BottomItems>
        </BottomItems>
      </ContentWrapper>
    </Container>
  );
}

export default SignUp;
