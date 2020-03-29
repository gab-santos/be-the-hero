import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import {
  Container,
  Content,
  Section,
  LogoImage,
  Title,
  Description,
  Link,
  FiArrowLeft,
  Form,
  Input,
  Textarea,
  Button
} from "./styles";
import logoImg from "../../assets/logo.svg";

export default function NewIncident() {
  const ongId = localStorage.getItem("@beTheHero:ongId");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("/incidents", data, {
        headers: {
          Authorization: ongId
        }
      });

      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar caso, tente novamente!");
    }
  }
  return (
    <Container>
      <Content>
        <Section>
          <LogoImage src={logoImg} alt="Be The Hero" />

          <Title>Cadastrar novo caso</Title>
          <Description>
            Descreva o caso detalhadamente para encontrar um herói para resolver
            isso.
          </Description>

          <Link to="/profile">
            <FiArrowLeft />
            Voltar para home
          </Link>
        </Section>

        <Form onSubmit={handleNewIncident}>
          <Input
            placeholder="Título do caso"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <Input
            type="number"
            placeholder="Valor em reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
