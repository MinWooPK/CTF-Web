import styled, { keyframes } from "styled-components";

// Animación wiggle para paths con class .wiggle-icon
const wiggle = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-3deg); }
  100% { transform: rotate(0deg); }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 36px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  text-align: center;
  transition: 0.3s ease all;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  /* .wiggle-icon {
    animation: ${wiggle} 0.6s ease-in-out infinite; */
  /* } */
  /* .spin-icon {
    animation: ${spin} 1s linear infinite; */
  /* } */
  // Aplica animación a elementos .wiggle-icon cuando se hace hover en el contenedor
  &:hover .wiggle-icon {
    animation: ${wiggle} 0.6s ease-in-out infinite;
  }
`;

export const Title = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const Subtitle = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const IconWrapper = styled.div`
  /* width: 80px;HomeDetailContainerSecondCards
  height: 60px;
  padding: 20px; */
  & > svg {
    width: 100%;
    height: 100%;
    overflow: visible;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
