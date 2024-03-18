import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Home1 from "../../../../assets/svg/Home1";
import Home2 from "../../../../assets/svg/Home2";
import Home3 from "../../../../assets/svg/Home3";
import Button from "../../../../components/Button/Button";
import {
  ServiceContainer,
  ServiceDetail,
  ServiceDetailButton,
  ServiceDetailSubScetion,
  ServiceDetailSubScetion1,
  ServiceDetailSubTitle,
  ServiceDetailSubTitleDetail,
  ServiceHomeSVG,
  ServiceSubContainer,
} from "./style";

const ServiceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref: serviceRef, inView: serviceInView } = useInView({
    threshold: 0.175, // Detecta cuando el 50% del elemento está en la vista
  });

  useEffect(() => {
    if (serviceInView) {
      setIsVisible(true);
    }
  }, [serviceInView]);

  // Datos de las secciones de servicios
  const serviceSectionsData = [
    {
      title: "Consultoría tecnológica",
      description: [
        "Analizamos las necesidades tecnológicas de su empresa. Buscamos las herramientas y aplicaciones disponibles en el mercado que se ajuste a las necesidades de su modelo de negocio.",
        "Le acompañamos en todo el proceso de elección, implementación y uso de las diferentes tecnologías empleadas.",
      ],
      homeComponent: <Home1 />,
    },
    {
      title: "Desarrollo de aplicaciones",
      description: [
        "Realizamos desarrollos de aplicaciones a medida, para ajustar las necesidades particulares de su empresa a las nuevas tecnologías.",
      ],
      homeComponent: <Home2 />,
    },
    {
      title: "Integración de sistemas",
      description: [
        "Integramos las aplicaciones de su empresa con terceros, utilizando los estándares existentes, tanto en la nube como en sus propios servidores.",
      ],
      homeComponent: <Home3 />,
    },
  ];

  return (
    <ServiceContainer>
      <ServiceDetail>Nuestros Servicios</ServiceDetail>
      <ServiceSubContainer ref={serviceRef}>
        {serviceSectionsData.map((section, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 100 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <ServiceDetailSubScetion key={index} isReversed={index === 1}>
              <ServiceDetailSubScetion1>
                <ServiceDetailSubTitle>{section.title}</ServiceDetailSubTitle>
                {section.description.map((text, i) => (
                  <ServiceDetailSubTitleDetail key={i}>
                    {text}
                  </ServiceDetailSubTitleDetail>
                ))}
                <ServiceDetailButton>
                  <a
                    href="mailto:codetofit@codetofit.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button children={"Saber más"} type={"primary"} />
                  </a>
                </ServiceDetailButton>
              </ServiceDetailSubScetion1>
              <ServiceHomeSVG>{section.homeComponent}</ServiceHomeSVG>
            </ServiceDetailSubScetion>
          </motion.div>
        ))}
      </ServiceSubContainer>
    </ServiceContainer>
  );
};

export default ServiceSection;
