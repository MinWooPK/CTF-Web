// style.js
import EtherealHome from "@assets/icons/EtherealHome.jpg";
import EtherealHome2 from "@assets/icons/EtherealHome2.jpg";

import styled, { css } from "styled-components";
const breakpoint = "1024px";

export const HomeMain = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  background-image: url(${EtherealHome});
  background-size: cover;

  background-repeat: no-repeat;
  background-position: right top;
  background-size: auto auto;
`;

export const HomeContainer = styled.div`
  /* padding: 80px 80px 96px; */

  @media (max-width: ${breakpoint}) {
    /* padding: 80px 24px 96px; */
  }
`;
export const HomeContainerMain = styled.div`
  padding: 80px 80px 96px;

  @media (max-width: 600px) {
    padding: 80px 24px 96px;
  }
`;

export const SubTitleContainer = styled.div`
  padding: 50px 0 20px;
`;

export const HomeTitleMain = styled.h1`
  color: #181818;
  font-size: 64px;
  font-weight: 600;
`;

export const HomeSubTitle1Main = styled.h2`
  color: #357c8f;
  font-size: 44px;
  font-weight: 500;
`;
export const HomeSubTitle2Main = styled.h2`
  color: #454545;
  font-size: 40px;
  font-weight: 400;
`;

export const SpanHomeContainer = styled.div`
  width: 315px;
`;

export const HomeSpanMain = styled.span`
  color: #829b9a;
  font-size: 24px;
  font-weight: 500;
`;

export const ButtonHomeContaienr = styled.div`
  padding: 32px 0 82px;
  display: flex;
  gap: 20px;
`;

const buttonVariants = {
  primary: css`
    background-color: #053745;
    color: #fff;
    border: none;
    font-size: 18px;
    font-weight: 600;

    &:hover {
      background-color: #829b9a;
    }
  `,
  secondary: css`
    background-color: #fff;
    color: #053745;
    border: none;
    font-size: 18px;
    font-weight: 600;

    &:hover {
      background-color: #829b9a;
      color: white;
    }
  `,
};

export const HomeButtonMain = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  ${(props) => buttonVariants[props.variant || "primary"]};
`;

export const HomeProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const HomeProductsDetail = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;

export const HomeDetail = styled.div`
  position: relative;
  padding: 20px;
  width: 100%;
  height: 100%;
  overflow: hidden; /* oculta lo que se pase del límite */
  background-image: url(${EtherealHome2});
  background-repeat: no-repeat;
  background-size: cover; /* o usa cover según prefieras */
  background-size: 100% 80%; /* aumenta tamaño para que “baje” más */
  background-position: center bottom; /* pegado abajo */
  @media (max-width: ${breakpoint}) {
    padding: 28px;
  }
`;
export const HomeDetailTitle = styled.h2`
  color: #181818;
  font-size: 56px;
  font-weight: 600;
`;
export const HomeDetailSubTitle = styled.p`
  color: #829b9a;
  font-size: 32px;
  font-weight: 500;
  @media (max-width: ${breakpoint}) {
    font-size: 20px;
  }
`;
export const HomeDetailContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const HomeDetailTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const HomeDetailCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const HomeDetailContainerSecond = styled.div``;

export const HomeDetailContainerSecondTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 150px 80px;
  @media (max-width: ${breakpoint}) {
    padding: 100px 0px;
  }
`;

export const HomeDetailContainerSecondTitle = styled.div`
  color: #1c1c1c;
  font-size: 56px;
  font-weight: 600;
  @media (max-width: 600px) {
    font-size: 42px;
  }
`;

export const HomeDetailContainerSecondSubTitleContainer = styled.div``;

export const HomeDetailContainerSecondSubTitle = styled.p`
  color: #829b9a;
  font-size: 28px;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
export const HomeDetailContainerSecondSubTitleSecond = styled.p`
  color: #829b9a;
  font-size: 28px;
  font-weight: 500;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const HomeDetailContainerSecondContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 26px;
  width: 100%;
  align-items: stretch;
  justify-content: center;
  padding-top: 40px;
`;

export const HomeDetailContainerSecondCards = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 36px 15px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  transition: 0.3s ease all;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  color: #1c1c1c;
  text-align: center;
  font-family: Urbanist;
  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media (min-width: 600px) {
    white-space: pre-line;
    font-size: 26px;
  }
`;
export const Highlight = styled.span`
  color: #1c1c1c;
  font-family: Urbanist;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const HomeDetailTecno = styled.div`
  color: #053745;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 48px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  transition: 0.3s ease all;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const ImgTec = styled.div`
  display: grid;
  grid-template-columns: repeat(4, auto);
  gap: 60px;
  justify-content: start;
  align-items: center;
  padding-top: 45px;

  @media (max-width: ${breakpoint}) {
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    gap: 40px;
  }
`;

export const ImgTecItem = styled.img`
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "80px"};
  @media (max-width: ${breakpoint}) {
    width: calc(${(props) => props.width || "80px"} * 0.75);
    height: calc(${(props) => props.height || "80px"} * 0.75);
  }
`;
