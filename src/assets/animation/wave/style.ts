import styled, { keyframes } from "styled-components";

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
  0%, 100% {
    stroke-width: 2px;
  }
  50% {
    stroke-width: 1px;
  }
`;

const moveLeftRight = keyframes`
  0% {
    transform: translateX(0); /* Sin traslación horizontal */
  }
  100% {
    transform: translateX(-100%); /* Traslación horizontal completa hacia la izquierda */
  }
`;

const moveUpDown = keyframes`
  0% {
    transform: translateY(0); /* Sin traslación vertical */
  }
  100% {
    transform: translateY(10px); /* Traslación vertical hacia abajo */
  }
`;

export const StyledSvg = styled.svg`
  animation: ${moveLeftRight} 6s linear infinite alternate,
    ${moveUpDown} 3s linear infinite alternate, ${colorTransition} 6s infinite,
    ${widthTransition} 6s infinite;
`;
