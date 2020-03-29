import styled from "styled-components";

import { Link as routerLink } from "react-router-dom";
import { FiArrowLeft as iconArrowLeft } from "react-icons/fi";

import { link, input, button } from "../../styles";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  padding: 96px;
  background: #f0f0f5;
  box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 380px;
`;

export const LogoImage = styled.img``;

export const Title = styled.h1`
  /* Top Left/Right Bottom */
  margin: 64px 0 32px;
  font-size: 32px;
`;

export const Description = styled.p`
  font-size: 18px;
  color: #737380;
  line-height: 32px;
`;

export const Link = styled(routerLink)`
  ${link}
`;

export const FiArrowLeft = styled(iconArrowLeft).attrs({
  size: 16,
  color: "#e02041"
})`
  margin-right: 8px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 450px;
`;

export const Input = styled.input`
  ${input}
  margin-top: 8px;
`;

export const InputGroup = styled.div`
  display: flex;

  input + input {
    margin-left: 8px;
  }
`;

export const Button = styled.button`
  ${button}
`;
