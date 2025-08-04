import { useRef } from "react";
import { useInView } from "@hooks/useInView";

import HeaderMain from "@layouts/Header/Header";
import Footer from "@components/Footer";
import ContactUs from "@components/ContactUs";
import TypingText from "@components/TypingText";

import { ArrowLeft } from "@assets/icons/ArrowLeft";

import {
  ContactUsMain,
  ContactUsContainer,
  ContactUsTitleDiv,
  ContactUsTitle,
  ContactUsIcon,
  ContactUsSubTitle,
  ContactUsBlur,
  ContactUsButton,
  ButtonContainer,
  InfoContact,
  BlurSection,
  ButtonDiv,
} from "./style";

const ContactUsPage = () => {
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
      <HeaderMain scrollToContact={scrollToContact} />
      <ContactUsMain
        ref={ref}
        className={`section ${isVisible ? "visible" : ""}`}
      >
        <ContactUsContainer>
          <ContactUsTitleDiv>
            <ContactUsTitle>Sobre nostros</ContactUsTitle>
            <ContactUsIcon>
              <TypingText text={"</>"} speed={100} />
            </ContactUsIcon>
          </ContactUsTitleDiv>
          <ContactUsSubTitle>
            Arrancamos en 2021 con una misión clara: proporcionar a nuestros
            clientes herramientas de calidad con las que afrontar los retos que
            se presentan en la era digital.
          </ContactUsSubTitle>
        </ContactUsContainer>
        <BlurSection>
          <ContactUsBlur>
            <InfoContact>
              Siempre estamos abiertos a colaborar, tomarnos un café o lo que
              surja
            </InfoContact>
            <ButtonDiv>
              <ArrowLeft />
              <ButtonContainer>
                <ContactUsButton onClick={scrollToContact}>
                  Contacto
                </ContactUsButton>
              </ButtonContainer>
            </ButtonDiv>
          </ContactUsBlur>
        </BlurSection>
      </ContactUsMain>
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
export default ContactUsPage;
