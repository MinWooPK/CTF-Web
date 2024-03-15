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
          <WaveAnimation />
        </HomeMainContainer>

        <ServiceSection />
        <ContactEmail contactId="Contact" />
      </Container>
    </>
  );
};

export default Home;
