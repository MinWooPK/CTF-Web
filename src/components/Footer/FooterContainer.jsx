import {
  FooterMain,
  LeftSection,
  RightSection,
  Link,
  TextSpanFirst,
  TextSpanSecond,
} from "./style";

const FooterContainer = () => {
  return (
    <>
      {/* otros componentes */}
      <FooterMain>
        {" "}
        <LeftSection>
          <TextSpanFirst>
            Copyright © 2021 Todos los derechos reservados
          </TextSpanFirst>
          <TextSpanSecond>Diseño y desarrollo CTF - CodeToFit</TextSpanSecond>
        </LeftSection>
        <RightSection>
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>
            Inicio
          </Link>
          <Link to="/AboutUs" onClick={() => window.scrollTo(0, 0)}>
            Sobre Nosotros
          </Link>
          <Link to="/Collaborations" onClick={() => window.scrollTo(0, 0)}>
            Servicios
          </Link>
        </RightSection>
      </FooterMain>
    </>
  );
};

export default FooterContainer;
