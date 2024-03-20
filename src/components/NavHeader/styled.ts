import styled, { keyframes } from "styled-components";

export const Navbar = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 20px 80px;
  align-items: center;
  justify-content: space-between;
  /* padding: 0.5rem 1rem; */
  left: 0;
  z-index: 5;
  /* position: fixed; */
  /* width: 100%; */
  @media (max-width: 768px) {
    flex-flow: row nowrap;
  }
  @media (max-width: 430px) {
    padding: 10px 24px;
  }
`;
export const ContainerNavbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (min-width: 768px) {
    flex-wrap: nowrap;
  }
`;
export const LogoContainer = styled.div`
  /* padding: 22px 0; */
`;
export const LogoImg = styled.img`
  width: 205.5px;
  height: 75px;
  @media (max-width: 768px) {
    height: 50px;
    width: 137px;
  }
`;

export const SiteMenu = styled.div`
  gap: 40px;
  display: flex;
  @media (max-width: 1020px) {
    display: none;
  }
`;

export const StieMenuUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StieMenuLi = styled.li`
  cursor: pointer;
  display: inline-block;
  margin: 0;
  padding: 0 12px;
  font-weight: 700;
  list-style: none;
  transition: all 0.35s ease-in-out;
  @media (max-width: 1020px) {
    width: 100%;
  }
`;

export const StieMenuHref = styled.a`
  color: #a7a6a6;
  font-family: "Urbanist";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  overflow: hidden;
  display: inline-block;
  @media (max-width: 1020px) {
    color: #fff;
    line-height: normal;
    font-style: normal;
    font-size: 28px;
  }
  &:hover {
    color: #053745;
    @media (max-width: 1020px) {
      color: #fff;
    }
  }

  &:before,
  &:after {
    content: attr(data-hover);
    position: absolute;
    color: #ffffff;
    white-space: nowrap;
    overflow: hidden;
  }

  &:before {
    height: 3px;
    width: 100%;
    background-color: #053745;
    bottom: -1px;
    left: 0;
    transform-origin: right;
    transform: scaleX(0);
    transition: transform 0.35s ease;
    @media (max-width: 1020px) {
      background-color: #fff;
    }
  }

  &:hover:before {
    transform-origin: left;
    transform: scaleX(1);
  }

  &:after {
    top: 0;
    left: 0;
    padding: 0.5em 0;
    max-width: 0%;
    transition: max-width 0.35s ease;
  }

  &:hover:after {
    max-width: 100%;
  }
`;

export const HamburgerMenu = styled.div`
  width: 30px;
  height: 20px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;
  /* margin: auto; */
  &:hover span:nth-child(2) {
    width: 100%;
  }
  & span:nth-child(1) {
    top: 0px;
    width: 100%;
  }
  & span:nth-child(2) {
    top: 9px;
    width: 22px;
  }
  & span:nth-child(3) {
    top: 18px;
    width: 100%;
  }

  /* &.open span:nth-child(1) {
    top: 9px;
    right: 0;
    transform: rotate(135deg);
    width: 28px !important;
  }

  &.open span:nth-child(3) {
    top: 9px;
    right: 0;
    transform: rotate(-135deg);
    width: 28px !important;
  }

  &.open span:nth-child(2) {
    opacity: 0;
    left: -20px;
  } */
  @media (min-width: 1020px) {
    display: none;
  }
`;

export const Bar = styled.span`
  display: block;
  position: absolute;
  height: 2px;
  width: 100%;
  background: #053745;
  opacity: 1;
  left: 0;
  top: 0;
  transform: rotate(0deg);
  transition: width 0.3s ease;
`;

export const NavbarButton = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-left: 30px;
  color: #ffc61a;
  height: 64px;
  line-height: 64px;
  padding: 0 21px;
  position: relative;
  font-size: 17px;
  font-weight: 600;
  border-radius: 3rem;
  cursor: pointer;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const NavBlack = styled.div<{ visiblenav: boolean }>`
  background-color: #053746;
  width: 50%;
  max-width: 480px;
  min-width: 260px;
  position: fixed;
  top: 0;
  right: ${(props) =>
    props.visiblenav
      ? "0"
      : "-100%"}; // Mostrar desde la derecha cuando visiblenav es true
  z-index: 1000;
  height: 100vh;
  transition: right 0.3s ease-in-out; // Animación de deslizamiento desde la derecha
  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const NavBlackHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`;

export const SideBarTitle = styled.h2`
  font-size: 26px;
  font-weight: 700;
  text-align: center;
  color: #ffc61a;
`;

export const IconCircle = styled.div`
  background-color: #ffc61a;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 91px;
  border-radius: 23rem;
`;

export const IconDescription = styled.p`
  color: white;
  font-size: 16px;
  font-weight: 600;
`;

export const CopyRightDescription = styled.p`
  color: #ffc61a;
  font-size: 16px;
  font-weight: 600;
  margin: auto;
  text-align: center;
`;

export const MobileUlDiv = styled.div`
  display: flex;
  gap: 44px;
  flex-direction: column;
  margin-top: 148px;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const LogoContainerText = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  align-items: start;
`;
export const LogoContainerFirstP = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #ffc61a;
  @media (max-width: 1100px) {
    font-size: 24px;
  }
`;
export const LogoContainerSecondP = styled.div`
  font-size: 20px;
  margin-top: -18px;
  margin-left: 7px;

  @media (max-width: 420px) {
    margin-top: 0;
    font-size: 14px;
    margin-left: 4px;
  }
`;
