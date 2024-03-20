import styled, { createGlobalStyle, keyframes } from "styled-components";
// Define keyframes
const moveForever = keyframes`
  0% {
    transform: translate(-90px, 0%);
  }
  100% {
    transform: translate(85px, 0%);
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

// Define keyframes for width transition
const widthTransition = keyframes`
  0% {
    stroke-width: .25px;
  }
  25% {
    stroke-width: 0.5px;
  }
  50% {
    stroke-width: 1px;
  }
  75% {
    stroke-width: 0.5px;
  }
  100% {
    stroke-width: .25px;
  }
`;
export const ContainerWave = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  align-items: center;
`;

// Create global styles
export const GlobalStyle = createGlobalStyle`
  ::selection {
    background-color: salmon;
    color: white;
  }
`;

// Styled SVG component
export const StyledSVG = styled.svg`
  display: block;
  width: 100%;
  height: 8em;
  max-height: 100vh;
  margin: 0;
  rotate: -3deg;
  @media (max-width: 768px) {
    height: 5em;
  }
`;

// Styled use element for the wave animation
export const StyledUse = styled.use`
  animation: ${moveForever} 12s linear infinite,
    ${colorTransition} 4s ease-in-out infinite,
    ${widthTransition} 2s ease-in-out infinite;
  &:nth-child(1) {
    animation-delay: -2s;
  }
  &:nth-child(2) {
    animation-delay: -2s;
    animation-duration: 5s;
  }
  &:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 3s;
    /* stroke: red !important; */
  }
  &:nth-child(4) {
    animation-delay: -4s;
    animation-duration: 3s;
    /* stroke: red !important; */
  }
`;
