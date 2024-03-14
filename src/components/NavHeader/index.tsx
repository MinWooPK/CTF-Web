import CloseIcon from "../../assets/svg/CloseIcon";
import Logo from "../../assets/svg/logo";
import Button from "../Button/Button";
import {
  Bar,
  ContainerNavbar,
  HamburgerMenu,
  LogoContainer,
  MobileUlDiv,
  NavBlack,
  NavBlackHeader,
  Navbar,
  SiteMenu,
  StieMenuHref,
  StieMenuLi,
} from "./styled";

import { useEffect, useState } from "react";

const NavHeader = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState<boolean>(false);
  const [isDesktop, setIsDestkop] = useState(window.innerWidth > 1020);

  useEffect(() => {
    const handleResize = () => {
      setIsDestkop(window.innerWidth > 1020);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const toggleMenu = () => {
    // setMenuOpen(!isMenuOpen);
    setNavVisible(!navVisible);
  };

  return (
    <Navbar>
      <ContainerNavbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <SiteMenu>
          <StieMenuLi>
            <StieMenuHref href="/">Inicio</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Servicios">Servicios</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Sobre">Sobre</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Carreras">Carreras</StieMenuHref>
          </StieMenuLi>
        </SiteMenu>
        {isDesktop && <Button children={"Contacto"} type={"secondary"} />}
        <HamburgerMenu
          className={isMenuOpen ? "open" : ""}
          onClick={toggleMenu}
        >
          <Bar />
          <Bar />
          <Bar />
        </HamburgerMenu>
        <NavBlack className="nav-black" visiblenav={navVisible}>
          <NavBlackHeader>
            <Logo secondary={true} />
            <CloseIcon onClick={toggleMenu} />
          </NavBlackHeader>
          <MobileUlDiv>
            <StieMenuLi>
              <StieMenuHref href="/">Inicio</StieMenuHref>
            </StieMenuLi>
            <StieMenuLi>
              <StieMenuHref href="/Servicios">Servicios</StieMenuHref>
            </StieMenuLi>
            <StieMenuLi>
              <StieMenuHref href="/Sobre">Sobre</StieMenuHref>
            </StieMenuLi>
            <StieMenuLi>
              <StieMenuHref href="/Carreras">Carreras</StieMenuHref>
            </StieMenuLi>
            <StieMenuLi>
              <StieMenuHref href="/Contacto">Contacto</StieMenuHref>
            </StieMenuLi>
          </MobileUlDiv>
        </NavBlack>
      </ContainerNavbar>
    </Navbar>
  );
};

export default NavHeader;
