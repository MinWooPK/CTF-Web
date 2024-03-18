import styled, { keyframes } from "styled-components";

const waveAnimation = keyframes`
  to {
    transform: translateX(-100%);
  }
`;

const colorTransition = keyframes`
  0% {
    stroke: #2e838f;
  }
  50% {
    stroke: #d9d9d9;
  }
  100% {
    stroke: #2e838f;
  }
`;

const widthTransition = keyframes`
  0% {
    stroke-width: 0.1px;
  }
  25% {
    stroke-width: 0.15px;
  }
  50% {
    stroke-width: 0.2px;
  }
  75% {
    stroke-width: 0.15px;
  }
  100% {
    stroke-width: 0.1px;
  }
`;

export const StyledSVG = styled.svg`
  position: relative;
  width: 120%;
  overflow: hidden;
  /* padding: 32px 0px 64px; */
  /* transform: scale(1.2); */
  height: 400px;
  rotate: -6deg;
  bottom: 100px;
  right: 20px;
  z-index: 29;
`;

export const StyledUse = styled.use`
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 4;
  opacity: 0.8;
  animation-name: ${waveAnimation};
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  transition-delay: 0s;
  transition-duration: 1.2s;
  transition-property: fill;
  transition-timing-function: ease-in-out;

  &:nth-child(1) {
    animation-duration: 7s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }

  &:nth-child(2) {
    animation-duration: 9s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }

  &:nth-child(3) {
    animation-duration: 14s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }

  &:nth-child(4) {
    animation-duration: 19s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }

  &:nth-child(5) {
    animation-duration: 24s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }

  &:nth-child(6) {
    animation-duration: 35s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }

  &:nth-child(7) {
    animation-duration: 17s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }

  &:nth-child(8) {
    animation-duration: 19s;
    animation-name: ${waveAnimation}, ${colorTransition}, ${widthTransition};
  }
`;
