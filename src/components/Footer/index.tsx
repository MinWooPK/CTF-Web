import { Link } from "react-router-dom";
import {
  FooterCodeToFit,
  FooterDescription,
  FooterDetail,
  LinkBar,
  LinkLi,
  StyledLink, // Añade el componente StyledLink aquí
} from "./style";

const links = [
  { text: "Inicio", url: "/" },
  // { text: "Servicios", url: "/Servicios" },
  { text: "Servicios", url: "/" },

  { text: "Sobre Nosotros", url: "/AboutUs" },
  { text: "Carreras", url: "/Carreras" },
];

const footerDescriptions = [
  "Copyright © 2021 Todos los derechos reservados",
  "Diseño y desarrollo CTF - Codetofit",
];

function Footer() {
  return (
    <FooterCodeToFit>
      <LinkBar>
        {links.map((link, index) => (
          <LinkLi key={index}>
            {/* Utiliza StyledLink en lugar de Link */}
            <StyledLink to={link.url}>{link.text}</StyledLink>
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
