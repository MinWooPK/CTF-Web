import { useState } from "react";

import {
  ContactUsMain,
  ContactUsContainer,
  CheckboxWrapper,
  Textarea,
  Button,
  Input,
  Label,
  Form,
  ContactUsContainerTitle,
  FormDiv,
} from "./style";

const ContactUs = ({ bgColor }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    comentario: "",
    acepto: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validación sencilla: todos los campos no vacíos y checkbox aceptado
  const isFormValid =
    formData.nombre.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.telefono.trim() !== "" &&
    formData.comentario.trim() !== "" &&
    formData.acepto;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    alert("Formulario enviado con éxito");
    // Aquí tu lógica de envío...
  };

  return (
    <ContactUsMain bgColor={bgColor}>
      <ContactUsContainer>
        <ContactUsContainerTitle>Contacto</ContactUsContainerTitle>
        <Form onSubmit={handleSubmit}>
          <FormDiv>
            <Label htmlFor="nombre">Nombre / Razón Social*</Label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </FormDiv>

          <FormDiv>
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormDiv>

          <FormDiv>
            <Label htmlFor="telefono">Teléfono*</Label>
            <Input
              id="telefono"
              name="telefono"
              type="tel"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </FormDiv>

          <FormDiv>
            <Label htmlFor="comentario">Comentario*</Label>
            <Textarea
              id="comentario"
              name="comentario"
              value={formData.comentario}
              onChange={handleChange}
              required
            />
          </FormDiv>

          <CheckboxWrapper>
            <Input
              id="acepto"
              name="acepto"
              type="checkbox"
              checked={formData.acepto}
              onChange={handleChange}
              required
            />
            <Label htmlFor="acepto">
              Acepto la Política de Privacidad de CTF y el tratamiento de mis
              datos para fines de contacto y posible colaboración
            </Label>
          </CheckboxWrapper>

          <Button type="submit" disabled={!isFormValid}>
            Enviar
          </Button>
        </Form>
      </ContactUsContainer>{" "}
    </ContactUsMain>
  );
};

export default ContactUs;
