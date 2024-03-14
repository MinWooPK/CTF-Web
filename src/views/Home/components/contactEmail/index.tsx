import Logo from "../../../../assets/svg/logo";
import Button from "../../../../components/Button/Button";
import { ConctactDetail, ContactSection } from "./style";

const contactEmail = () => {
  return (
    <ContactSection>
      <Logo />
      <ConctactDetail>Envíanos un correo a:</ConctactDetail>
      <a href="mailto:codetofit@codetofit.com" target="_blank" rel="noreferrer">
        <Button type={"terciary"}>codetofit@codetofit.com</Button>
      </a>
    </ContactSection>
  );
};

export default contactEmail;
