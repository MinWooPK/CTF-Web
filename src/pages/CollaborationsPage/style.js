// style.js
import EtherealHome3 from "@assets/icons/EtherealHome3.jpg";

import styled from "styled-components";

const breakpoint = "1024px";

export const CollaborationsMain = styled.div`
  position: relative;
  width: 100%;
  min-height: 100%;

  background-image: url(${EtherealHome3});
  background-repeat: no-repeat;
  /* background-size: contain; */
  background-position: bottom;
  background-size: auto 60%;
  background-attachment: fixed;
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 40px 96px 0;
  @media (max-width: ${breakpoint}) {
    padding: 20px;
  }
`;

export const TitleCollaborationsUs = styled.h1`
  color: #3f3f3f;
  font-size: 56px;
  font-weight: 700;
`;

export const SubTitleCollaborationsUs = styled.p`
  color: #454545;
  font-size: 24px;
  font-weight: 600;
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
