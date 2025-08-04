import { useEffect, useState } from "react";
import { useInView } from "@hooks/useInView";

import {
  ProyectSection,
  ProyectContainerMain,
  ProyectContainerLeft,
  ProyectContainerRightTop,
  ProyectContainerRightBottom,
  ImgTec,
  ImgTecItem,
  ProyectTitle,
  ProyectSubTitle,
  ProyectDefinition,
  DemoButton,
  ProyectContainerRight,
  ProyectSubTitleContainer,
  ProyectClient,
  ProyectRightDefinition,
  ProyectProductDiv,
  ProyectTitleContainer,
  ProyectProductContainer,
} from "./style";
// import { DetailProduct1 } from "@assets/icons/DetailProduct1";
// import { DetailProduct2 } from "@assets/icons/DetailProduct2";
// import { DetailProduct4 } from "@assets/icons/DetailProduct4";

// import Tec1 from "@assets/icons/Tec1.png";
// import Tec2 from "@assets/icons/Tec2.png";
// import Tec3 from "@assets/icons/Tec3.png";
// import Tec4 from "@assets/icons/Tec4.png";
// import Tec5 from "@assets/icons/Tec5.png";
// import Tec6 from "@assets/icons/Tec6.png";
// import Tec7 from "@assets/icons/Tec7.png";

// import LogoOrtegon from "@assets/icons/LogoOrtegon.svg";

const ProyectDetail = ({
  title,
  subtitles,
  definitions,
  clientLogo,
  icons,
  technologies,
  scrollToContact,
}) => {
  const [ref, isVisible] = useInView({ threshold: 0.1 });

  return (
    <ProyectSection
      ref={ref}
      className={`section ${isVisible ? "visible" : ""}`}
    >
      {" "}
      <ProyectContainerMain>
        <ProyectContainerLeft>
          <ProyectTitleContainer>
            <ProyectTitle>{title}</ProyectTitle>
            <ProyectProductContainer>
              {icons.map((IconComponent, idx) => (
                <ProyectProductDiv key={idx}>
                  <IconComponent />
                </ProyectProductDiv>
              ))}
            </ProyectProductContainer>
          </ProyectTitleContainer>

          <ProyectSubTitleContainer>
            {subtitles.map((text, idx) => (
              <ProyectSubTitle key={idx}>{text}</ProyectSubTitle>
            ))}
          </ProyectSubTitleContainer>
        </ProyectContainerLeft>

        <ProyectContainerRight>
          <ProyectContainerRightTop>
            <ProyectClient src={clientLogo} />
            <ProyectRightDefinition>
              {definitions.map((d, idx) => (
                <ProyectDefinition key={idx}>{d}</ProyectDefinition>
              ))}
            </ProyectRightDefinition>
          </ProyectContainerRightTop>

          <ProyectContainerRightBottom>
            <DemoButton onClick={scrollToContact}>Solicitar demo</DemoButton>
          </ProyectContainerRightBottom>
        </ProyectContainerRight>
      </ProyectContainerMain>
      <ImgTec>
        {technologies.map((src, idx) => (
          <ImgTecItem key={idx} src={src} />
        ))}
      </ImgTec>
    </ProyectSection>
  );
};

export default ProyectDetail;
