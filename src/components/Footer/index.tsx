import React, { useEffect, useState } from "react";
import {
  FooterCodeToFit,
  FooterDescription,
  FooterDetail,
  LinkBar,
  LinkLi,
  StyledLink,
} from "./style";
import { useLocation } from "react-router-dom";

const footerDescriptions = [
  "Copyright © 2024 Todos los derechos reservados",
  "Diseño y desarrollo CTF - Codetofit",
];

function Footer() {
  const location = useLocation();
  const [navVisible, setNavVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Scroll to top only on Careers and Home links
    const careerAndHomeLinks = ["/", "/AboutUs", "/Carreras"];
    const currentPath = location.pathname;

    if (careerAndHomeLinks.includes(currentPath)) {
      handleScrollToTop();
    }
  }, [location.pathname]);

  const handleContactClick = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    if (navVisible) {
      setNavVisible(false);
    }
  };
  const links = [
    { text: "Inicio", url: "/" },
    { text: "Servicios", url: "", onClick: handleContactClick }, // Cambiado
    { text: "Sobre Nosotros", url: "/AboutUs" },
    { text: "Carreras", url: "/Carreras" },
  ];
  return (
    <FooterCodeToFit>
      <LinkBar>
        {links.map((link, index) => (
          <LinkLi key={index}>
            <StyledLink to={link.url} onClick={link.onClick}>
              {link.text}
            </StyledLink>
          </LinkLi>
        ))}
      </LinkBar>
      <FooterDetail>
        {footerDescriptions.map((description, index) => (
          <FooterDescription key={index}>{description}</FooterDescription>
        ))}
      </FooterDetail>
    </FooterCodeToFit>
  );
}

export default Footer;
