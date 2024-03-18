import React from "react";
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
    stroke-width: 0.25px;
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
  width: 110%;
  min-width: 1200px;
  overflow: hidden;
  padding: 32px 0px 64px;
  transform: scale(1.2);
  rotate: -6deg;
  height: 400px;
  bottom: 100px;
`;

export const StyledUse = styled.use`
  fill: none;
  stroke-linecap: round;
  stroke-miterlimit: 4;
  opacity: 0.8;
  animation: ${waveAnimation} infinite linear,
    ${colorTransition} 4s ease-in-out infinite,
    ${widthTransition} 2s ease-in-out infinite;

  &:nth-child(1) {
    stroke: #121f4e;
    animation-duration: 9s;
  }

  &:nth-child(2) {
    stroke: #28a5ea;
    animation-duration: 13s;
  }

  &:nth-child(3) {
    stroke: #16e2c5;
    animation-duration: 19s;
  }

  &:nth-child(4) {
    stroke: #28a5ea;
    animation-duration: 24s;
  }

  &:nth-child(5) {
    stroke: #16e2c5;
    animation-duration: 19s;
  }

  &:nth-child(6) {
    stroke: #28a5ea;
    animation-duration: 14s;
  }

  &:nth-child(7) {
    stroke: #121f4e;
    animation-duration: 9s;
  }

  &:nth-child(8) {
    stroke: #28a5ea;
    animation-duration: 24s;
  }
`;
