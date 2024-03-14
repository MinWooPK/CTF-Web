import Home1 from "../../../../assets/svg/Home1";
import Home2 from "../../../../assets/svg/Home2";
import Home3 from "../../../../assets/svg/Home3";
import Logo from "../../../../assets/svg/logo";
import Button from "../../../../components/Button/Button";
import {
  ServiceContainer,
  ServiceDetail,
  ServiceDetailButton,
  ServiceDetailSubScetion,
  ServiceDetailSubScetion1,
  ServiceDetailSubTitle,
  ServiceDetailSubTitleDetail,
  ServiceSubContainer,
} from "./style";

const ServiceSection = () => {
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
      <ServiceSubContainer>
        {serviceSectionsData.map((section, index) => (
          <ServiceDetailSubScetion key={index} isReversed={index === 1}>
            <ServiceDetailSubScetion1>
              <ServiceDetailSubTitle>{section.title}</ServiceDetailSubTitle>
              {section.description.map((text, i) => (
                <ServiceDetailSubTitleDetail key={i}>
                  {text}
                </ServiceDetailSubTitleDetail>
              ))}
              <ServiceDetailButton>
                <Button children={"Saber más"} type={"primary"} />
              </ServiceDetailButton>
            </ServiceDetailSubScetion1>
            {section.homeComponent}
          </ServiceDetailSubScetion>
        ))}
      </ServiceSubContainer>
    </ServiceContainer>
  );
};

export default ServiceSection;
