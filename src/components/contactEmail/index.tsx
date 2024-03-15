import React from "react";
import Logo from "../../assets/svg/logo";
import Button from "../Button/Button";
import { ConctactDetail, ConctactSubDetail, ContactSection } from "./style";

interface ContactEmailProps {
  type?: string;
  contactId?: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({ type, contactId }) => {
  return (
    <ContactSection secondary={type === "secondary"} id={contactId}>
      <Logo />
      <ConctactDetail>Envíanos un correo a:</ConctactDetail>
      <a href="mailto:codetofit@codetofit.com" target="_blank" rel="noreferrer">
        <Button type={"terciary"}>codetofit@codetofit.com</Button>
      </a>
      {type === "secondary" && (
        <ConctactSubDetail>
          Y nos pondremos en contacto contigo cuanto antes.
        </ConctactSubDetail>
      )}
    </ContactSection>
  );
};

export default ContactEmail;
