import React, { useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import getValidationErrors from '../../utils/getValidationErrors';
import { Container, BackgroundImage, ContentWrapper, Form, Options, BottomItems } from './styles';


import logoImg from '../../images/logo.svg';
import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import CheckBox from '../../components/CheckBox/index';

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}


const Login: React.FC = () => {
  const [loginRequestLoading, setLoginRequestLoading] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { addToast } = useToast();
  const { signIn } = useAuth();

  const handleSubmit = useCallback(
    async (data: LoginFormData) => {

        if (loginRequestLoading) {
          return;
        }
        setLoginRequestLoading(true);
        const { email, password, rememberMe } = data;
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Insira um email válido.'),
          password: Yup.string()
            .min(2, 'Curto demais')
            .required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({ email, password, rememberMe });

        setLoginRequestLoading(false);

        setTimeout(() => {history.push('/app');}, 3000);


      } catch (err) {
        setLoginRequestLoading(false);
        if (Error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(Error);
          formRef.current?.setErrors(errors);
          return;
        }

        addToast({
          title: 'Algo deu errado',
          description:
            'Algo deu errado durante o login, cheque suas credenciais e tente novamente',
          type: 'error',
        });
      }
    },
    [signIn, history, addToast, loginRequestLoading],
  );


  return (
    <Container>
      <BackgroundImage>
      <img src={logoImg} className="logoimg" alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças. </p>
        </main>
        {/* <Location>
          <strong>Volta Grande</strong>
          <span>Minas Gerais</span>
        </Location> */}
      </BackgroundImage>
      <ContentWrapper>


        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Fazer login</h1>
          <Input name="email" label="E-mail" type="email" />
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

        </BottomItems>
      </ContentWrapper>
    </Container>
  );
}

export default Login
