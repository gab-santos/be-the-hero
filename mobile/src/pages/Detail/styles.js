import styled from "styled-components/native";

import Constants from "expo-constants";
import { Feather as feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 0 24px;
  padding-top: ${Constants.statusBarHeight + 20}px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.Image``;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Feather = styled(feather).attrs({
  size: 28,
  color: "#e02041"
})``;

export const Incident = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
  margin-top: 48px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
  margin-top: 24px;
`;

export const Value = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 8px;
`;

export const ContactBox = styled(Incident)`
  margin-top: 0;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 20px;
  color: #12121a;
  line-height: 30px;
`;

export const Description = styled.Text`
  font-size: 15px;
  color: #737370;
  margin-top: 16px;
`;

export const Actions = styled.View`
  margin-top: 8px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Action = styled.TouchableOpacity`
  height: 50px;
  width: 48%;
  background-color: #e02041;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ActionText = styled.Text`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
`;
