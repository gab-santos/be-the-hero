import styled from "styled-components";
import { FiLogIn } from "react-icons/fi";

import { input, button, link } from "../../styles";
import { Link as routerLink } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FormSection = styled.section`
  width: 100%;
  max-width: 350px;
  margin-right: 30px;
`;

export const LogoImage = styled.img``;

export const Form = styled.form`
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 32px;
`;

export const Input = styled.input`
  ${input};
`;

export const Button = styled.button`
  ${button};
`;

export const LoginIcon = styled(FiLogIn).attrs({
  size: 16,
  color: "#e02041"
})`
  margin-right: 8px;
`;

export const Link = styled(routerLink)`
  ${link}
`;

export const HeroesImage = styled.img``;
