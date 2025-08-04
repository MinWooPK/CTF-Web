// style.js
import EtherealHome2 from "@assets/icons/EtherealHome2.jpg";

import styled, { css } from "styled-components";
const breakpoint = "1024px";

export const AboutUsMain = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;

  background-image: url(${EtherealHome2});
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-position: center;

  background-attachment: fixed;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 96px;
  @media (max-width: 600px) {
    padding: 20px;
  }
`;

export const TitleAboutUs = styled.h1`
  color: #3f3f3f;

  font-family: Urbanist;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitleAboutUs = styled.p`
  color: #829b9a;
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ProyectSection = styled.section`
  padding: 40px 96px;
  display: flex;
  flex-direction: column;
  gap: 160px;
  @media (max-width: ${breakpoint}) {
    padding: 20px;
  }
`;
