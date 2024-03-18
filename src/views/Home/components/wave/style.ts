import styled, { keyframes } from "styled-components";
// import WaveImg from "../../../../assets/animation/wave";
const WaveImg: string = require("../../../../assets/animation/wave");

export const WaveContainer = styled.div`
  /* bottom: 0; */
  width: 100%;
  overflow: hidden;
  /* position: absolute; */
  z-index: 100;
`;

export const waveAnimation = keyframes`
  0% {
   margin-left: 0;  }
  100% {
  margin-left: -1600px;
  }
`;

const swellAnimation = keyframes`
  0%, 100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
`;

export const Wave = styled.div`
  background: url(${WaveImg}) repeat-x;
  width: 4000px;
  height: 198px; /* Ajusta el alto de la ola */
  animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  transform: translate3d(0, 0, 0);
  position: absolute;
  bottom: 0;
  left: 0;

  &:nth-of-type(2) {
    background: url(${WaveImg}) repeat-x;
    width: 4000px;
    height: 160px;
    animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
      ${swellAnimation} 7s ease -1.25s infinite;
    opacity: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
  }
`;
