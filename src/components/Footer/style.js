import styled from "styled-components";
import { NavLink } from "react-router-dom";
const breakpoint = "1024px";

export const FooterMain = styled.footer`
  background-color: #053746;
  color: white;
  height: auto;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  font-family: "Urbanist", sans-serif;
  flex-wrap: wrap;
  row-gap: 10px;

  @media (max-width: ${breakpoint}) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding: 20px;
    gap: 30px;
  }
`;

export const TextSpanFirst = styled.span`
  color: #d2d2d2;
  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const TextSpanSecond = styled.span`
  color: #d2d2d2;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  user-select: none;
`;

// Contenedor izquierdo con gap entre textos
export const LeftSection = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
`;

// Contenedor derecho con menú
export const RightSection = styled.nav`
  display: flex;
  gap: 40px;

  a {
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  @media (max-width: ${breakpoint}) {
    /* flex-direction: column; */
    justify-content: space-between;
    width: 100%;
    /* padding-top: 10px; */
  }
`;

export const Link = styled(NavLink)`
  color: #fff;
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  padding-bottom: 2px;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 1px;
    width: 0;
    background-color: white;
    opacity: 0;
    transition: width 0.3s ease, opacity 0.3s ease;
  }

  &:hover::after {
    width: 100%;
    opacity: 1;
  }

  @media (max-width: ${breakpoint}) {
    width: 100%;
  }
`;
