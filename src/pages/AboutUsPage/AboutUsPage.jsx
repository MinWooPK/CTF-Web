import { useRef } from "react";
import { useInView } from "@hooks/useInView";

import HeaderMain from "@layouts/Header/Header";
import Footer from "@components/Footer";
import ContactUs from "@components/ContactUs";
import ProyectDetail from "@components/ProyectDetail";

import {
  AboutUsMain,
  TitleSection,
  TitleAboutUs,
  SubTitleAboutUs,
  ProyectSection,
} from "./style";

import { DetailProduct1 } from "@assets/icons/DetailProduct1";
import { DetailProduct2 } from "@assets/icons/DetailProduct2";
import { DetailProduct4 } from "@assets/icons/DetailProduct4";

import Tec1 from "@assets/icons/Tec1.png";
import Tec2 from "@assets/icons/Tec2.png";
import Tec3 from "@assets/icons/Tec3.png";
import Tec4 from "@assets/icons/Tec4.png";
import Tec5 from "@assets/icons/Tec5.png";
import Tec6 from "@assets/icons/Tec6.png";

import LogoOrtegon from "@assets/icons/LogoOrtegon.svg";

const AboutUsPage = () => {
  const contactRef = useRef(null);
  const [ref, isVisible] = useInView({ threshold: 0.1 });
  const [refContact, isContact] = useInView({
    threshold: 0.6,
  });
  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <AboutUsMain>
        <HeaderMain scrollToContact={scrollToContact} />
        <TitleSection
          ref={ref}
          className={`section ${isVisible ? "visible" : ""}`}
        >
          <TitleAboutUs>Nuestros Proyectos</TitleAboutUs>
          <SubTitleAboutUs>
            Nos especializamos en Fintech, Banca, Proptech, ERPs & CRMs, y
            también hacemos software a medida.
          </SubTitleAboutUs>
        </TitleSection>

        <ProyectSection>
          <ProyectDetail
            title="PlusServices"
            subtitles={[
              "Software Prop-tech diseñado para revolucionar la gestión de propiedades y seguros. Esta herramienta innovadora permite a los propietarios y administradores de inmuebles gestionar sus activos de manera más eficiente, optimizando procesos como la evaluación de riesgos, la gestión de pólizas y la atención al cliente. ",
              "Con una interfaz intuitiva y funcionalidades avanzadas, nuestro software facilita la toma de decisiones informadas, mejorando la rentabilidad y la satisfacción del cliente en el sector inmobiliario.",
            ]}
            definitions={[
              "Recientemente usé el software de RealEstatePro y ha transformado mi gestión de propiedades.",
              "Su interfaz es intuitiva y fácil de usar, lo que facilita el seguimiento de listados y la comunicación con clientes. Las funciones de análisis ofrecen información valiosa para tomar decisiones. ¡Recomiendo este software a quienes estén en el sector inmobiliario!",
            ]}
            clientLogo={LogoOrtegon}
            icons={[DetailProduct1, DetailProduct2, DetailProduct4]}
            technologies={[Tec1, Tec2, Tec3, Tec4, Tec5, Tec6]}
            scrollToContact={scrollToContact}
          />
          <ProyectDetail
            title="WealthReader"
            subtitles={[
              "Software Prop-tech diseñado para revolucionar la gestión de propiedades y seguros. Esta herramienta innovadora permite a los propietarios y administradores de inmuebles gestionar sus activos de manera más eficiente, optimizando procesos como la evaluación de riesgos, la gestión de pólizas y la atención al cliente. ",
              "Con una interfaz intuitiva y funcionalidades avanzadas, nuestro software facilita la toma de decisiones informadas, mejorando la rentabilidad y la satisfacción del cliente en el sector inmobiliario.",
            ]}
            definitions={[
              "Recientemente usé el software de RealEstatePro y ha transformado mi gestión de propiedades. ",
              "Su interfaz es intuitiva y fácil de usar, lo que facilita el seguimiento de listados y la comunicación con clientes. Las funciones de análisis ofrecen información valiosa para tomar decisiones. ¡Recomiendo este software a quienes estén en el sector inmobiliario!",
            ]}
            clientLogo={LogoOrtegon}
            icons={[DetailProduct2, DetailProduct4]}
            technologies={[Tec1, Tec2, Tec3, Tec4, Tec6]}
            scrollToContact={scrollToContact}
          />
          <ProyectDetail
            title="Ortegón & Espinosa de los Monteros"
            subtitles={[
              "Software Prop-tech diseñado para revolucionar la gestión de propiedades y seguros. Esta herramienta innovadora permite a los propietarios y administradores de inmuebles gestionar sus activos de manera más eficiente, optimizando procesos como la evaluación de riesgos, la gestión de pólizas y la atención al cliente. ",
              "Con una interfaz intuitiva y funcionalidades avanzadas, nuestro software facilita la toma de decisiones informadas, mejorando la rentabilidad y la satisfacción del cliente en el sector inmobiliario.",
            ]}
            definitions={[
              "Recientemente usé el software de RealEstatePro y ha transformado mi gestión de propiedades. ",
              "Su interfaz es intuitiva y fácil de usar, lo que facilita el seguimiento de listados y la comunicación con clientes. Las funciones de análisis ofrecen información valiosa para tomar decisiones. ¡Recomiendo este software a quienes estén en el sector inmobiliario!",
            ]}
            clientLogo={LogoOrtegon}
            icons={[DetailProduct1]}
            technologies={[Tec1, Tec2, Tec3, Tec4, Tec6]}
            scrollToContact={scrollToContact}
          />
        </ProyectSection>
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
