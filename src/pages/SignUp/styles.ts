import styled from 'styled-components';
import { shade } from 'polished';
import signUpImg from '../../assets/sign-up-background.png';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }
`;

export const Form = styled.form``;

export const Background = styled.div`
  flex: 1;
  background: url(${signUpImg}) no-repeat center;
  background-size: cover;
`;

export const Logon = styled.a`
  color: #f4ede8;
  display: block;
  margin-top: 24px;
  text-decoration: none;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  transition: background-color 0.2s;

  &:hover {
    color: ${shade(0.2, '#f4ede8')};
  }

  svg {
    margin-right: 16px;
  }
`;
