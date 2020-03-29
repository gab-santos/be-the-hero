import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import {
  Container,
  FormSection,
  HeroesImage,
  Form,
  Title,
  Input,
  Button,
  LoginIcon,
  Link,
  LogoImage
} from "./styles";

import heroesImg from "../../assets/heroes.png";
import logoImg from "../../assets/logo.svg";

export default function Logon() {
  const [id, setId] = useState("");
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post("/sessions", { id });

      localStorage.setItem("@beTheHero:ongId", id);
      localStorage.setItem("@beTheHero:ongName", response.data.name);

      history.push("/profile");
    } catch (err) {
      alert("Falha no login, tente novamente!");
    }
  }

  return (
    <Container>
      <FormSection>
        <LogoImage src={logoImg} alt="Be The Hero" />
        <Form onSubmit={handleLogin}>
          <Title>Faça seu login</Title>
          <Input
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
          <Link to="/register">
            <LoginIcon />
            Não tenho cadastro
          </Link>
        </Form>
      </FormSection>
      <HeroesImage src={heroesImg} alt="Heroes" />
    </Container>
  );
}
