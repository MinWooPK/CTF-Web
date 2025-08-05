import { useRef } from "react";
import { useInView } from "@hooks/useInView";

import HeaderMain from "@layouts/Header/Header";
import Footer from "@components/Footer";
import ContactUs from "@components/ContactUs";
import TypingText from "@components/TypingText";

import { ArrowLeft } from "@assets/icons/ArrowLeft";

import {
  AboutUsMain,
  AboutUsContainer,
  AboutUsTitleDiv,
  AboutUsTitle,
  AboutUsIcon,
  AboutUsSubTitle,
  AboutUsBlur,
  AboutUsButton,
  ButtonContainer,
  InfoContact,
  BlurSection,
  ButtonDiv,
} from "./style";

const AboutUsPage = () => {
  const [refContact, isContact] = useInView({
    threshold: 0.1,
  });
  const contactRef = useRef(null);
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AboutUsMain>
        <HeaderMain scrollToContact={scrollToContact} />
        <div ref={ref} className={`section ${isVisible ? "visible" : ""}`}>
          <AboutUsContainer>
            <AboutUsTitleDiv>
              <AboutUsTitle>Sobre nostros</AboutUsTitle>
              <AboutUsIcon>
                <TypingText text={"</>"} speed={100} />
              </AboutUsIcon>
            </AboutUsTitleDiv>
            <AboutUsSubTitle>
              Arrancamos en 2021 con una misión clara: proporcionar a nuestros
              clientes herramientas de calidad con las que afrontar los retos
              que se presentan en la era digital.
            </AboutUsSubTitle>
          </AboutUsContainer>
          <BlurSection>
            <AboutUsBlur>
              <InfoContact>
                Siempre estamos abiertos a colaborar, tomarnos un café o lo que
                surja
              </InfoContact>
              <ButtonDiv>
                <ArrowLeft />
                <ButtonContainer>
                  <AboutUsButton onClick={scrollToContact}>
                    Contacto
                  </AboutUsButton>
                </ButtonContainer>
              </ButtonDiv>
            </AboutUsBlur>
          </BlurSection>
        </div>
      </AboutUsMain>
      <div
        ref={(el) => {
          contactRef.current = el; // para scroll programado
          refContact.current = el;
        }}
        className={`section ${isContact ? "visible" : ""}`}
        style={{ padding: "20px" }}
      >
        <ContactUs />{" "}
      </div>{" "}
      <Footer />
    </>
  );
};
export default AboutUsPage;
