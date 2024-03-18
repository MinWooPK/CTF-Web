import { motion } from "framer-motion";
import ContactEmail from "../../components/contactEmail";
import {
  Container,
  JobContainer,
  JobDetail,
  JobDetailContainer,
  JobSubDetail,
  JobSubDetailBold,
  JobThemeSpecial,
  JobThemeSpecialContainer,
  JobThemeSpecialDetail,
  JobThemeSpecialDetailP,
  JobThemeSpecialTitle,
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
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Estado inicial
          animate={{ opacity: 1, y: 0 }} // Estado animado
          transition={{ duration: 0.5 }} // Duración de la animación
        >
          <JobThemeSpecialContainer>
            <JobThemeSpecial>
              <JobThemeSpecialTitle>Frontend</JobThemeSpecialTitle>
              <JobThemeSpecialDetail>
                <JobThemeSpecialDetailP>React</JobThemeSpecialDetailP>
                <JobThemeSpecialDetailP>Angular</JobThemeSpecialDetailP>
                <JobThemeSpecialDetailP>Vue.js</JobThemeSpecialDetailP>
                <JobThemeSpecialDetailP>Blazor</JobThemeSpecialDetailP>
              </JobThemeSpecialDetail>
            </JobThemeSpecial>
            <JobThemeSpecial>
              <JobThemeSpecialTitle>Backend</JobThemeSpecialTitle>
              <JobThemeSpecialDetail>
                <JobThemeSpecialDetailP>NetCore</JobThemeSpecialDetailP>
                <JobThemeSpecialDetailP>Net</JobThemeSpecialDetailP>
                <JobThemeSpecialDetailP>PHP</JobThemeSpecialDetailP>
              </JobThemeSpecialDetail>
            </JobThemeSpecial>
            <JobThemeSpecial>
              <JobThemeSpecialTitle>
                Data base, DevOps & Cloud
              </JobThemeSpecialTitle>
              <JobThemeSpecialDetail>
                <JobThemeSpecialDetailP>SQL</JobThemeSpecialDetailP>
                <JobThemeSpecialDetailP>Server</JobThemeSpecialDetailP>
                <JobThemeSpecialDetailP>Azure</JobThemeSpecialDetailP>
              </JobThemeSpecialDetail>
            </JobThemeSpecial>
          </JobThemeSpecialContainer>
        </motion.div>
      </JobContainer>
      <ContactEmail contactId="Contact" />
    </Container>
  );
};

export default JobPage;
