import React, { useRef, useState, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { Container, BackButton, BackgroundImage, ContentWrapper, Form, BottomItems } from './styles';
import { FiArrowLeft } from 'react-icons/fi';
import logoImg from '../../images/logo.svg';

import Input from '../../components/Input/index';
import Button from '../../components/Button/index';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import getValidationErrors from '../../utils/getValidationErrors';


interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  whatsapp: string;
}


const SignUp: React.FC = () => {
  const [registerRequestLoading, setRegisterRequestLoading] = useState(false);
  const formRef = useRef<FormHandles | null>(null);
  const { addToast } = useToast();
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
          whatsapp: Yup.string().required('Número de whatsapp é obrigatório'),
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

        setTimeout(() => { history.push('/'); }, 3000);

        addToast({
          title: 'Muito obrigado',
          description:
            'O seu cadastro foi realizado com sucesso.',
          type: 'success',
        });

      } catch (error) {
        setRegisterRequestLoading(false);
        if (error instanceof Yup.ValidationError) {
          const errors = getValidationErrors(error);
          formRef.current?.setErrors(errors);
          return;
        }

        const { message: errorMessage } = error.response.data;

        if (errorMessage === 'Email already taken') {

          return;
        }

        addToast({
          title: 'E-mail já em uso',
          description:
            'O E-mail que você inseriu já está em uso, tente novamente com um outro email',
          type: 'error',
        });
      }

    },
    [history, addToast, registerRequestLoading],
  );
  return (
    <Container>
      <BackButton  to="/">
        <FiArrowLeft size={26} color="#15C3D6" />
      </BackButton >
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
          <h1>Cadastre-se</h1>
          <p>Por favor, preencha os dados abaixo.</p>
          <Input name="name" label="Nome" type="text" />
          <Input name="email" label="E-mail" type="email" />
          <Input name="whatsapp" label="Whatsapp" type="number" />
          <Input name="password" label="Senha" type="password" />


          <Button
            loading={registerRequestLoading}
            containerStyle={{ marginTop: 45 }}
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
