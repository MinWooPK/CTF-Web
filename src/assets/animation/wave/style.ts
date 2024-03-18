import React from "react";
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

const waveAnimation = keyframes`
  to {
    transform: translateX(-100%);
  }
`;

export const WaveSVG = styled.svg`
  width: 120%;
  min-width: 1200px;
  height: 400px;
  rotate: -6deg;
  position: relative;
  right: 20px;
  bottom: 80px;
`;

export const WavePath = styled.use<{ duration: string }>`
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 4;
  opacity: 0.8;
  transition-delay: 0s;
  /* transition-duration: var(--time-double); */
  transition-property: fill;
  transition-timing-function: ease-in-out;
  animation: ${waveAnimation} infinite linear,
    ${colorTransition} 4s ease-in-out infinite,
    ${widthTransition} 2s ease-in-out infinite;
  animation-duration: ${(props) => props.duration};

  &:nth-child(1) {
    animation-duration: 9s;
    stroke: red;
  }
  &:nth-child(2) {
    animation-duration: 5s;
    stroke: blue;
    animation-direction: reverse;
  }
  &:nth-child(3) {
    /* animation-direction: reverse; */
    animation-duration: 13s;
    stroke: green;
  }
  &:nth-child(4) {
    animation-duration: 19s;
    stroke: purple;
  }
  &:nth-child(5) {
    /* animation-direction: reverse; */
    animation-duration: 12s;
    stroke: orange;
    animation-direction: reverse;
  }
  &:nth-child(6) {
    /* animation-direction: reverse; */
    animation-duration: 9s;
    stroke: orange;
  }
  &:nth-child(7) {
    /* animation-direction: reverse; */
    animation-duration: 9s;
    stroke: orange;
  }
  &:nth-child(8) {
    /* animation-direction: reverse; */
    animation-duration: 9s;
    stroke: orange;
    animation-direction: reverse;
  }
`;
