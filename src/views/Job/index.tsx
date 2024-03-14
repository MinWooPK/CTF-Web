import ContactEmail from "../../components/contactEmail";
import {
  Container,
  JobContainer,
  JobDetail,
  JobDetailContainer,
  JobSubDetail,
  JobSubDetailBold,
  JobTitle,
} from "./style";

const JobPage = () => {
  return (
    <Container>
      <JobContainer>
        <JobTitle>¿Quiéres trabajar con nosotros? </JobTitle>
        <JobDetailContainer>
          <JobDetail>
            En CFT -CodeToFit- &nbsp;
            <JobSubDetailBold>
              estamos siempre abiertos a conocer personas con talento y pasión
              por las nuevas tecnologías.
            </JobSubDetailBold>
            &nbsp; ¡Nunca se sabe cuándo pueden surgir colaboraciones!
          </JobDetail>
          <JobSubDetail>✨ 100% remoto ✨</JobSubDetail>
          <JobDetail>
            Fundamentalmente trabajamos con las siguientes tecnologías:
          </JobDetail>
        </JobDetailContainer>
      </JobContainer>
      <ContactEmail />
    </Container>
  );
};

export default JobPage;
