import React, { useEffect, useState } from "react";
import {
  Container,
  HomeDetail,
  HomeMainContainer,
  HomeSubTitle,
  HomeTitle,
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
        <HomeMainContainer>
          <HomeTitle>CodeToFit</HomeTitle>
          <HomeSubTitle>especialistas en</HomeSubTitle>
          <HomeDetail>
            <span> Transformación digital</span>&nbsp;, desarrollo de&nbsp;
            <span>aplicaciones web </span>e integración de &nbsp;
            <span>sistemas</span>
          </HomeDetail>
        </HomeMainContainer>
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
        <ContactEmail contactId="Contact" />
      </Container>
    </>
  );
};

export default Home;
