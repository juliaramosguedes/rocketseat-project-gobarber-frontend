import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Background, Container, Content, Logon } from './styles';
import { Button, Input } from '../../components';
import { getValidationErrors } from '../../utils/getValidationErrors';

import logoSvg from '../../assets/logo.svg';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório.'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Informe um e-mail válido.'),
        password: Yup.string().min(6, 'Senha precisa ter no mínimo 6 dígitos'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoSvg} alt="GoBarber Logotipo" />
        <Form ref={formRef} onSubmit={handleSubmit}>
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
