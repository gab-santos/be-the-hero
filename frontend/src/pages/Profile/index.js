import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../../services/api";

import {
  Container,
  Header,
  LogoImage,
  Welcome,
  Link,
  Button,
  FiPower,
  ListTitle,
  List,
  ListItem,
  Property,
  Value,
  ButtonDelete,
  FiTrash2
} from "./styles";

import logoImg from "../../assets/logo.svg";

export default function Profile() {
  const ongId = localStorage.getItem("@beTheHero:ongId");
  const ongName = localStorage.getItem("@beTheHero:ongName");

  const [incidents, setIncidents] = useState([]);

  const history = useHistory();

  useEffect(() => {
    api
      .get("/profile", {
        headers: {
          Authorization: ongId
        }
      })
      .then(response => setIncidents(response.data));
  }, [ongId]);

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: ongId
        }
      });

      setIncidents(incidents.filter(incident => incident.id !== id));
    } catch (err) {
      alert("Erro ao deletar caso, tente novamente!");
    }
  }

  function handleLogout() {
    localStorage.clear();
    history.push("/");
  }

  return (
    <Container>
      <Header>
        <LogoImage src={logoImg} />
        <Welcome>Bem vinda, {ongName}</Welcome>

        <Link to="/incidents/new">Cadastrar novo caso</Link>
        <Button type="button" onClick={handleLogout}>
          <FiPower />
        </Button>
      </Header>

      <ListTitle>Casos cadastrados</ListTitle>
      <List>
        {incidents.map(incident => (
          <ListItem key={incident.id}>
            <Property>Caso:</Property>
            <Value>{incident.title}</Value>

            <Property>Descrição:</Property>
            <Value>{incident.description}</Value>

            <Property>Valor:</Property>
            <Value>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Value>

            <ButtonDelete
              type="button"
              onClick={() => handleDeleteIncident(incident.id)}
            >
              <FiTrash2 />
            </ButtonDelete>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
