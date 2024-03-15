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
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const FooterDetail = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 16px;
  color: #d2d2d2;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const FooterDescription = styled.p``;
