import styled, { keyframes } from "styled-components";
import WaveImg from "./../../../../assets/svg/Wave.svg";

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
  background: url(${WaveImg}) no-repeat;
  width: 100%;
  /* background-color: red; */
  height: 498px; /* Ajusta el alto de la ola */
  /* animation: ${waveAnimation} 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite; */
  /* transform: translate3d(0, 0, 0); */
  position: absolute;
  bottom: 0;
  left: 0;
`;
export const WaveContainer = styled.div`
  /* height: 5%;
  width: 100%;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  background: #015871; */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 298px;
  height: 498px; /* Ajusta el alto de la ola */
  z-index: 1;
  overflow: hidden;
  /* background: #053745; */
`;
