import React from "react";
import { motion } from "framer-motion"; // Importa motion desde framer-motion
import Logo from "../../assets/svg/logo";
import Button from "../Button/Button";
import { ConctactDetail, ConctactSubDetail, ContactSection } from "./style";

interface ContactEmailProps {
  type?: string;
  contactId?: string;
}

const ContactEmail: React.FC<ContactEmailProps> = ({ type, contactId }) => {
  return (
    <motion.div // Usa motion.div para aplicar animaciones
      initial={{ opacity: 0, y: 50 }} // Estado inicial
      animate={{ opacity: 1, y: 0 }} // Estado animado
      transition={{ duration: 0.5 }} // Duración de la animación
    >
      <ContactSection secondary={type === "secondary"} id={contactId}>
        <Logo />
        <ConctactDetail>Envíanos un correo a:</ConctactDetail>
        <a
          href="mailto:codetofit@codetofit.com"
          target="_blank"
          rel="noreferrer"
        >
          <Button type={"terciary"}>codetofit@codetofit.com</Button>
        </a>
        {type === "secondary" && (
          <ConctactSubDetail>
            Y nos pondremos en contacto contigo cuanto antes.
          </ConctactSubDetail>
        )}
      </ContactSection>
    </motion.div>
  );
};

export default ContactEmail;
