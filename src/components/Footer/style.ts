import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterCodeToFit = styled.footer`
  background-color: ${({ theme }) => theme.colors.principal.codetofit};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  min-height: 127px;
  gap: 24px;
  padding-bottom: 20px;
`;

export const LinkBar = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 48px;
  padding: 24px 64px;
`;

export const LinkLi = styled.li`
  cursor: pointer;
  list-style: none;
  padding: 0 9px;
`;

export const StyledLink = styled(Link)`
  &&& {
    text-decoration: none;
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    position: relative; /* Añade posición relativa para que los pseudoelementos absolutos funcionen correctamente */

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -2px; /* Ajusta la posición del subrayado */
      width: 100%;
      height: 2px; /* Ajusta el grosor del subrayado */
      background-color: #fff; /* Color del subrayado */
      transform: scaleX(0); /* Inicialmente no visible */
      transition: transform 0.3s ease;
    }

    &:hover::after {
      transform: scaleX(1); /* Aparece el subrayado al pasar el mouse */
    }
  }
`;

export const FooterDetail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 2px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const FooterDescription = styled.p``;
