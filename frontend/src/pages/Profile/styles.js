import styled from "styled-components";

import { Link as routerLink } from "react-router-dom";
import { FiPower as iconPower, FiTrash2 as iconFiTrash2 } from "react-icons/fi";

import { button } from "../../styles";

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 30px auto;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 64px;
`;

export const Welcome = styled.span`
  font-size: 20px;
  margin-left: 24px;
`;

export const Link = styled(routerLink)`
  ${button};
  width: 260px;
  /* Alinhado o máximo possível para a direita */
  margin-left: auto;
  margin-top: 0;
`;

export const Button = styled.button`
  height: 60px;
  width: 60px;
  border-radius: 4px;
  border: 1px solid #dcdce6;
  background: transparent;
  margin-left: 16px;
  transition: border-color 0.2s;

  :hover {
    border-color: #999;
  }
`;

export const FiPower = styled(iconPower).attrs({
  size: 18,
  color: "#e02041"
})``;

export const ListTitle = styled.h1`
  margin-top: 80px;
  margin-bottom: 24px;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  list-style: none;
`;

export const ListItem = styled.li`
  background: #fff;
  padding: 24px;
  border-radius: 8px;
  position: relative;
`;

export const Property = styled.strong`
  display: block;
  margin-bottom: 16px;
  color: #41414d;

  p + && {
    margin-top: 32px;
  }
`;

export const Value = styled.p`
  color: #737380;
  line-height: 21px;
  font-size: 16px;
`;

export const ButtonDelete = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  border: 0;
  background: transparent;

  :hover {
    opacity: 0.8;
  }
`;

export const FiTrash2 = styled(iconFiTrash2).attrs({
  size: 20,
  color: "#a8a8b3"
})``;
