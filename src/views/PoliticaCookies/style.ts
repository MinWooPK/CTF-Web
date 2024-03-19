import styled from "styled-components";

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.principal.codetofit};
  display: flex;
  justify-content: center;
`;
export const Container = styled.div`
  max-width: 80%;
  padding-bottom: 100px;
`;

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const Bold = styled.b`
  color: ${({ theme }) => theme.colors.principal.bold};
  font-weight: bold;
`;

export const Introduction = styled.h1`
  color: ${({ theme }) => theme.colors.principal.pure};
  font-size: 36px;
  line-height: 1.5em;
  font-weight: 500;
`;

export const TitleCookies = styled.h2`
  color: ${({ theme }) => theme.colors.principal.pure};
  font-size: 30px;
  line-height: 1.5em;
  font-weight: 500;
`;

export const DefinitionCookies = styled.p`
  color: ${({ theme }) => theme.colors.principal.pure};
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5em;
  margin-top: 0;
  margin-bottom: 1rem;
`;
export const CodeToFitImg = styled.img`
  max-height: 50px;
`;
