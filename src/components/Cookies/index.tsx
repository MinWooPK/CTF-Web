// Importar React y los hooks useState y useEffect
import React, { useState, useEffect } from "react";

// Importar los componentes estilizados desde su archivo de estilos
import {
  AvisoCookies,
  Paragraph,
  Button,
  Link,
  Background,
  ButtonsCookies,
  RejectCookies,
} from "./styled";
import Cookies from "../../assets/svg/Cookies";

// Definir la interfaz global para la propiedad dataLayer
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Definir el componente funcional CookiesNotification
const CookiesNotification: React.FC = () => {
  // Definir el estado cookiesAccepted utilizando useState, con un valor inicial de 0
  const [cookiesAccepted, setCookiesAccepted] = useState<number>(0);

  // Utilizar useEffect para realizar acciones después de que el componente se monte
  useEffect(() => {
    // Verificar si las cookies han sido aceptadas anteriormente
    if (!localStorage.getItem("cookies-aceptadas")) {
      // Si no se han aceptado, establecer cookiesAccepted en 1
      setCookiesAccepted(1);
    } else {
      // Si se han aceptado y window.dataLayer está definido, agregar un evento al dataLayer
      if (window.dataLayer) {
        window.dataLayer.push({ event: "cookies-aceptadas" });
      }
    }
  }, []);

  // Definir la función handleAcceptCookies para manejar el evento de aceptar cookies
  const handleAcceptCookies = () => {
    // Establecer cookiesAccepted en 0 para representar inactivo
    setCookiesAccepted(0);
    // Establecer un elemento en el almacenamiento local para indicar que las cookies han sido aceptadas
    localStorage.setItem("cookies-aceptadas", "true");
    // Si window.dataLayer está definido, agregar un evento al dataLayer para registrar la aceptación de cookies
    if (window.dataLayer) {
      window.dataLayer.push({ event: "cookies-aceptadas" });
    }
  };

  // Renderizar los componentes estilizados y manejar el evento onClick en el botón de aceptar cookies
  return (
    <>
      <AvisoCookies activo={cookiesAccepted}>
        {/* <CookieImage src={ Cookies} alt="Galleta" /> */}
        <Cookies></Cookies>
        <Paragraph>
          <b>Sólo utilizamos cookies técnicas</b> &nbsp; para mejorar tu
          experiencia mientras navegas por nuestra web
        </Paragraph>
        <ButtonsCookies>
          <RejectCookies onClick={handleAcceptCookies}>
            Rechazar las Cookies
          </RejectCookies>
          <Button onClick={handleAcceptCookies}>Acepto las Cookies</Button>
        </ButtonsCookies>
        <Link href="/Politicas" target="_blank">
          Aviso de Cookies
        </Link>
      </AvisoCookies>
      <Background activo={cookiesAccepted} />
    </>
  );
};

// Exportar el componente CookiesNotification
export default CookiesNotification;
