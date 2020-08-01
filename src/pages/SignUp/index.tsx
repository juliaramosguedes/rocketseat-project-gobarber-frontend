import React from 'react';
import { Form } from '@unform/web';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Background, Container, Content, Logon } from './styles';
import { Button, Input } from '../../components';
import logoSvg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const handleSubmit = (data: object): void => {
    console.log(data);
  };

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoSvg} alt="GoBarber Logotipo" />
        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" placeholder="Nome" icon={FiUser} />
          <Input name="email" placeholder="Email" icon={FiMail} />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            icon={FiLock}
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <Logon href="/">
          <FiArrowLeft />
          Voltar para logon
        </Logon>
      </Content>
    </Container>
  );
};

export default SignUp;
