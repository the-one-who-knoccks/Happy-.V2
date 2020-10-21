import React, { useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Container, BackgroundImage, ContentWrapper, Form, BottomItems, Location } from './styles';
import logoImg from '../../images/logo.svg';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import api from '../../services/api';


interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
}


const SignUp: React.FC = () => {
  const [registerRequestLoading, setRegisterRequestLoading] = useState(false);
  const formRef = useRef<FormHandles | null>(null);
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: RegisterFormData) => {
      try {
        if (registerRequestLoading) {
          return;
        }
        setRegisterRequestLoading(true);
        const { name, email, password, whatsapp } = data;

        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .min(2, 'Curto demais')
            .max(30, 'Longo demais')
            .required('Nome obrigatório'),
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um Email valido'),
          whatsapp: Yup.string().required(),
          password: Yup.string().min(6, 'No mínmo 6 dígitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('/users', {
          name,
          email,
          password,
          whatsapp
        });

        setRegisterRequestLoading(false);

        history.push('/login');
      } catch (error) {
        setRegisterRequestLoading(false);



      }
    },
    [history, registerRequestLoading],
  );
  return (
    <Container>
      <BackgroundImage>
      <img src={logoImg} className="logoimg" alt="Happy" />
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

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Cadastre-se</h1>
          <p>Por favor, preencha os dados abaixo.</p>
          <Input name="name" label="Nome" type="text" />
          <Input name="email" label="E-mail" type="email" />
          <Input name="whatsapp" label="Whatsapp" type="number" />
          <Input name="password" label="Senha" type="password" />


          <Button
            loading={registerRequestLoading}
            containerStyle={{ marginTop: 15 }}
          >
            Cadastrar
        </Button>

        </Form>
        <BottomItems>
        </BottomItems>
      </ContentWrapper>
    </Container>
  );
}

export default SignUp;
