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
  const handleContactClick = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    if (navVisible) {
      setNavVisible(false);
    }
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
            <StieMenuHref onClick={handleContactClick}>Servicios</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/AboutUs">Sobre Nosotros</StieMenuHref>
          </StieMenuLi>
          <StieMenuLi>
            <StieMenuHref href="/Carreras">Carreras</StieMenuHref>
          </StieMenuLi>
        </SiteMenu>
        {isDesktop && (
          <Button
            children={"Contacto"}
            type={"secondary"}
            onHandleClick={handleContactClick}
          />
        )}
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
              {/* <StieMenuHref href="/Servicios">Servicios</StieMenuHref> */}{" "}
              <StieMenuHref onClick={handleContactClick}>
                Servicios
              </StieMenuHref>
            </StieMenuLi>
            <StieMenuLi>
              <StieMenuHref href="/AboutUs">Sobre Nosostros</StieMenuHref>
            </StieMenuLi>
            <StieMenuLi>
              <StieMenuHref href="/Carreras">Carreras</StieMenuHref>
            </StieMenuLi>
            <StieMenuLi>
              <StieMenuHref onClick={handleContactClick}>Contacto</StieMenuHref>
            </StieMenuLi>
          </MobileUlDiv>
        </NavBlack>
      </ContainerNavbar>
    </Navbar>
  );
};

export default NavHeader;
