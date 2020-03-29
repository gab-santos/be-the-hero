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

export const HeaderText = styled.Text`
  font-size: 15px;
  color: #837380;
`;

export const HeaderTextBold = styled.Text`
  font-weight: bold;
`;

export const Title = styled.Text`
  font-size: 30px;
  margin-bottom: 16px;
  margin-top: 48px;
  color: #13131a;
  font-weight: bold;
`;

export const Decription = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #737380;
`;

export const FlatList = styled.FlatList`
  margin-top: 32px;
`;

export const ListItem = styled.View`
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 16px;
`;

export const Property = styled.Text`
  font-size: 14px;
  color: #41414d;
  font-weight: bold;
`;

export const Value = styled.Text`
  font-size: 15px;
  color: #737380;
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TextButton = styled.Text`
  color: #e02041;
  font-size: 15px;
  font-weight: bold;
`;

export const Feather = styled(feather).attrs({
  size: 16,
  color: "#e02041"
})``;
