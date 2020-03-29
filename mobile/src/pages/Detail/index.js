import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as MailComposer from "expo-mail-composer";
import { Linking } from "react-native";

import logoImg from "../../assets/logo.png";

import {
  Container,
  Header,
  Image,
  Button,
  Feather,
  Incident,
  Property,
  Value,
  ContactBox,
  Title,
  Description,
  Actions,
  Action,
  ActionText
} from "./styles";

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const incident = route.params.incident;
  const value = Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(incident.value);
  const message = `Olá ${incident.name}, estou entrando em contato pois gostaria de ajudar no caso "${incident.title}" com o valor de ${value}  :)`;

  function navigationBack() {
    navigation.goBack();
  }

  function sendWhatsapp() {
    Linking.openURL(
      `whatsapp://send?phone="+55${incident.whatsapp}"&text=${message}`
    );
  }

  function sendEmail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [incident.email],
      body: message
    });
  }

  return (
    <Container>
      <Header>
        <Image source={logoImg} />

        <Button onPress={navigationBack}>
          <Feather name="arrow-left" />
        </Button>
      </Header>

      <Incident>
        <Property>ONG:</Property>
        <Value>
          {incident.name} de {incident.city}/{incident.uf}
        </Value>

        <Property>Caso:</Property>
        <Value>{incident.title}</Value>

        <Property>Valor:</Property>
        <Value>{value}</Value>
      </Incident>

      <ContactBox>
        <Title>Salve o dia!</Title>
        <Title>Seja o herói desse caso.</Title>

        <Description>Entre em contato:</Description>

        <Actions>
          <Action onPress={sendWhatsapp}>
            <ActionText>WhatsApp</ActionText>
          </Action>
          <Action onPress={sendEmail}>
            <ActionText>E-mail</ActionText>
          </Action>
        </Actions>
      </ContactBox>
    </Container>
  );
}
