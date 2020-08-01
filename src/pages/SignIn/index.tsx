import React from 'react';
import { Form } from '@unform/web';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Background, Container, Content, Login } from './styles';
import { Button, Input } from '../../components';
import logoSvg from '../../assets/logo.svg';

const SignIn: React.FC = () => {
  const handleSubmit = (data: object): void => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <img src={logoSvg} alt="GoBarber Logotipo" />
        <Form onSubmit={handleSubmit}>
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
