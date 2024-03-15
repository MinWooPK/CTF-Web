import ContactEmail from "../../components/contactEmail";
import {
  Container,
  ContainerBox,
  ContainerDetail,
  ContainerSubTitle,
  ContainerTitle,
} from "./style";

const AboutPage = () => {
  return (
    <Container>
      <ContainerBox>
        <ContainerTitle>Sobre nosotros</ContainerTitle>
        <ContainerDetail>
          Arrancamos en 2021 con una misión clara: proporcionar a nuestros
          clientes herramientas de calidad con las que afrontar los retos que se
          presentan en la era digital.
        </ContainerDetail>
        <ContainerSubTitle>
          Conócenos, cuéntanos tu proyecto, tu idea, y la hacemos realidad.
        </ContainerSubTitle>
      </ContainerBox>
      <ContactEmail type="secondary" contactId="Contact" />
    </Container>
  );
};

export default AboutPage;
