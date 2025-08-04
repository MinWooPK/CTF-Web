import styled from "styled-components";
// import { NavLink } from "react-router-dom";

const breakpoint = "1024px";

export const HeaderMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 21px 24px;
  gap: 50px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: ${breakpoint}) {
    position: relative;
    padding: 12px 18px;
    gap: 20px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;

  @media (max-width: ${breakpoint}) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const HeaderRouteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  @media (max-width: ${breakpoint}) {
    display: none;
  }
`;

export const HeaderRoute = styled.div`
  color: #a7a6a6;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.3s ease;

  &.active {
    color: #053745;
    font-weight: 700;
    text-decoration: underline;
  }

  &:hover {
    color: #053745;
    transform: scale(1.05);
  }
`;

export const HeaderButton = styled.button`
  background-color: #fff;
  filter: drop-shadow(0 4px 7px rgba(107, 162, 158, 0.6));
  border: none;
  padding: 8px 21px;
  border-radius: 8px;
  cursor: pointer;
  color: #1c1c1c;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0f4f2;
    transform: translateY(-2px);
  }
`;

export const HeaderIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderP = styled.p`
  color: #053745;
  font-size: 14px;
  font-weight: 500;
`;
export const HamburgerIcon = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "isOpen",
})`
  display: none;
  flex-direction: column;
  margin-left: auto;
  width: 24px;
  height: 18px;
  cursor: pointer;
  position: relative;
  justify-content: ${({ isOpen }) => (isOpen ? "center" : "space-between")};

  div {
    height: 3px;
    background-color: #053745;
    border-radius: 2px;
    transition: all 0.4s ease;
    transform-origin: center;

    &:nth-child(1) {
      width: 100%;
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(45deg) translate(2px, 2px)" : "none"};
    }

    &:nth-child(2) {
      width: ${({ isOpen }) => (isOpen ? "0%" : "75%")};
      opacity: ${({ isOpen }) => (isOpen ? 0 : 1)};
    }

    &:nth-child(3) {
      width: ${({ isOpen }) => (isOpen ? "100%" : "50%")};
      transform: ${({ isOpen }) =>
        isOpen ? "rotate(-45deg) translate(2px, -2px)" : "none"};
    }
  }

  // Solo se asigna animación en hover y cuando el menú está cerrado
  &:hover div:nth-child(1) {
    ${({ isOpen }) =>
      !isOpen && "animation: pulseWidth1 2s infinite ease-in-out;"}
  }

  &:hover div:nth-child(2) {
    ${({ isOpen }) =>
      !isOpen && "animation: pulseWidth2 2s infinite ease-in-out;"}
  }

  &:hover div:nth-child(3) {
    ${({ isOpen }) =>
      !isOpen && "animation: pulseWidth3 2s infinite ease-in-out;"}
  }

  @media (max-width: ${breakpoint}) {
    display: flex;
  }

  @keyframes pulseWidth1 {
    0%,
    100% {
      width: 100%;
    }
    50% {
      width: 50%;
    }
  }

  @keyframes pulseWidth2 {
    0%,
    100% {
      width: 75%;
    }
    50% {
      width: 65%;
    }
  }

  @keyframes pulseWidth3 {
    0%,
    100% {
      width: 50%;
    }
    50% {
      width: 100%;
    }
  }
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 95px;
  left: 30px;
  right: 30px;
  background-color: white;
  border: 1px solid #dedede;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;
  @media (max-width: ${breakpoint}) {
    justify-content: center;
    align-items: center;
  }

  &.menu-open {
    animation: fadeSlideDown 0.3s ease forwards;
  }

  &.menu-close {
    animation: fadeSlideUp 0.3s ease forwards;
  }

  @keyframes fadeSlideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeSlideUp {
    from {
      opacity: 1;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
`;
