import React, { useEffect, useState } from "react";
import {
  Container,
  // Section,
  // LeftIntroduction,
  // TitleIntroduction,
  // DefinitionIntroduction,
  // RightIntroduction,
} from "./style";
import WaveAnimation from "./components/wave";
import ContactEmail from "../../components/contactEmail";
import ServiceSection from "./components/Servicios";

const Home = () => {
  return (
    <>
      <Container>
        {/* <LeftIntroduction>
          <TitleIntroduction>
            Te ayudamos a encajar las piezas
          </TitleIntroduction>
          <DefinitionIntroduction>Desarrollamos tu</DefinitionIntroduction>

          <DefinitionIntroduction>
            Somos especialistas en transformación digital, desarrollo de
            aplicaciones web e integración de sistemas
          </DefinitionIntroduction>
        </LeftIntroduction>
        <RightIntroduction></RightIntroduction> */}
        <ServiceSection />
        <WaveAnimation />
        <ContactEmail />
      </Container>
    </>
  );
};

export default Home;
