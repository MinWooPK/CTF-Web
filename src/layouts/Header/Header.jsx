import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
  HeaderMain,
  HeaderRoute,
  HeaderRouteContainer,
  HeaderButton,
  HeaderP,
  HeaderIcon,
  HeaderContainer,
  HeaderLogoContainer,
  HamburgerIcon,
  MobileMenuContainer,
} from "@layouts/Header/style";

import { CTF_Logo } from "@assets/icons/CTF-Logo";

const Header = ({ scrollToContact }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false); // si está cerrándose
  const [isMenuVisible, setIsMenuVisible] = useState(false); // si debe estar en el DOM
  // Detectar si es móvil
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
        setIsAnimating(false);
      }
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const handleMenuNavigate = (path) => {
    console.log("RUTA ACTUAL:", location.pathname);
    if (menuOpen) {
      setIsAnimating(true);
      setMenuOpen(false);

      setTimeout(() => {
        setIsAnimating(false);
        setIsMenuVisible(false);
        navigate(path); // navegar tras la animación
      }, 350);
    } else {
      navigate(path); // si por alguna razón el menú está cerrado, navegar normal
    }
  };

  const toggleMenu = () => {
    if (menuOpen) {
      setIsAnimating(true); // iniciar animación
      setMenuOpen(false); // cambiar clase a menu-close

      // Esperar a que termine la animación para quitar del DOM
      setTimeout(() => {
        setIsAnimating(false);
        setIsMenuVisible(false);
      }, 300); // debe coincidir con duración de animación
    } else {
      setIsMenuVisible(true); // montar en el DOM
      setTimeout(() => setMenuOpen(true), 10); // dar tiempo a que se monte antes de aplicar clase
    }
  };
  return (
    <HeaderMain>
      <HeaderContainer>
        <HeaderLogoContainer>
          <HeaderIcon>
            <CTF_Logo />
          </HeaderIcon>
          {!isMobile && <HeaderP>CTF</HeaderP>}
        </HeaderLogoContainer>

        {isMobile && (
          <HamburgerIcon onClick={toggleMenu} isOpen={menuOpen}>
            <div />
            <div />
            <div />
          </HamburgerIcon>
        )}

        {!isMobile && (
          <HeaderRouteContainer>
            <HeaderRoute
              onClick={() => handleMenuNavigate("/")}
              className={location.pathname === "/" ? "active" : ""}
            >
              Inicio
            </HeaderRoute>
            <HeaderRoute
              onClick={() => handleMenuNavigate("/AboutUs")}
              className={location.pathname === "/AboutUs" ? "active" : ""}
            >
              Sobre nosotros
            </HeaderRoute>
            <HeaderRoute
              onClick={() => handleMenuNavigate("/Collaborations")}
              className={
                location.pathname === "/Collaborations" ? "active" : ""
              }
            >
              Proyecto/Clientes
            </HeaderRoute>
          </HeaderRouteContainer>
        )}
      </HeaderContainer>

      {!isMobile && (
        <HeaderContainer>
          <HeaderButton onClick={scrollToContact}>Contacto</HeaderButton>
        </HeaderContainer>
      )}
      {isMenuVisible && (
        <MobileMenuContainer className={menuOpen ? "menu-open" : "menu-close"}>
          <HeaderRoute
            onClick={() => handleMenuNavigate("/")}
            className={location.pathname === "/" ? "active" : ""}
          >
            Inicio
          </HeaderRoute>
          <HeaderRoute
            onClick={() => handleMenuNavigate("/AboutUs")}
            className={location.pathname === "/AboutUs" ? "active" : ""}
          >
            Sobre nosotros
          </HeaderRoute>
          <HeaderRoute
            onClick={() => handleMenuNavigate("/Collaborations")}
            className={location.pathname === "/Collaborations" ? "active" : ""}
          >
            Proyecto/Clientes
          </HeaderRoute>
        </MobileMenuContainer>
      )}
    </HeaderMain>
  );
};

export default Header;
