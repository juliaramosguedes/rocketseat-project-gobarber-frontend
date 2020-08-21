import React, { useRef, useCallback } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Background, Container, Content, Login } from './styles';
import { Button, Input } from '../../components';
import { getValidationErrors } from '../../utils/getValidationErrors';
import logoSvg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Informe um e-mail válido.'),
        password: Yup.string().required('Informe a sua senha.'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="GoBarber Logotipo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>
          <Input name="email" placeholder="E-mail" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Entrar</Button>
          <a href="/forgot">Esqueci minha senha</a>
        </Form>
        <Login href="/login">
          <FiLogIn />
          Criar conta
        </Login>
      </Content>
      <Background />
    </Container>
  );
};

export default SignIn;
