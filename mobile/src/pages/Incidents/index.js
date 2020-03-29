import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

import logoImg from "../../assets/logo.png";
import api from "../../services/api";

import {
  Container,
  Header,
  Image,
  HeaderText,
  HeaderTextBold,
  Title,
  Decription,
  FlatList,
  ListItem,
  Property,
  Value,
  Button,
  TextButton,
  Feather
} from "./styles";

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    // Impede que mais de uma requisição seja feita caso o
    // usuário fique rolando a página insistentemente
    if (loading) return;

    // Impede de fazer a requisição caso não haja incidentes para carregar
    if (total > 0 && incidents.length === total) return;

    setLoading(true);

    const response = await api.get("/incidents", {
      params: { page }
    });

    setIncidents([...incidents, ...response.data]);
    setTotal(response.headers["x-total-count"]);

    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <Container>
      <Header>
        <Image source={logoImg} />
        <HeaderText>
          Total de <HeaderTextBold>{total} casos</HeaderTextBold>.
        </HeaderText>
      </Header>

      <Title>Bem-vindo!</Title>
      <Decription>Escolha um dos casos abaixo e salve o dia.</Decription>

      <FlatList
        data={incidents}
        keyExtractor={incident => String(incident.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        // Diz em quantos % do final da lista que onEndReached vai ser executado
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <ListItem>
            <Property>ONG:</Property>
            <Value>{incident.name}</Value>

            <Property>Caso:</Property>
            <Value>{incident.title}</Value>

            <Property>Valor:</Property>
            <Value>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Value>

            <Button onPress={() => navigateToDetail(incident)}>
              <TextButton>Ver mais detalher</TextButton>
              <Feather name="arrow-right" />
            </Button>
          </ListItem>
        )}
      />
    </Container>
  );
}
