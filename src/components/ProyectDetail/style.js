import styled from "styled-components";
const breakpoint = "1024px";

//  Componente base reutilizable
const GlassCard = styled.div`
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
`;

//  Layouts y estructura
export const ProyectSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProyectContainerMain = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoint}) {
    grid-template-columns: 1fr;
  }
`;

export const ProyectContainerLeft = styled(GlassCard)`
  padding: 40px 25px 50px 32px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  @media (max-width: ${breakpoint}) {
    padding: 20px 12px 25px 16px;
  }
`;

export const ProyectTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProyectContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
export const ProyectSubTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ProyectContainerRightTop = styled(GlassCard)`
  padding: 32px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
`;

export const ProyectRightDefinition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ProyectContainerRightBottom = styled(GlassCard)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 0;
`;

//  Contenido
export const ProyectTitle = styled.h2`
  color: #181818;

  font-family: Urbanist;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: ${breakpoint}) {
    font-size: 30px;
  }
`;
export const ProyectProductContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const ProyectProductDiv = styled.div`
  background-color: transparent;
  /* filter: drop-shadow(0 4px 7px rgba(107, 162, 158, 0.6)); */
  backdrop-filter: blur(5px);
  border: 1px solid #b1b8b8;
  padding: 6px 7px;
  border-radius: 8px;
  max-width: 44px;
  max-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ProyectProduct = styled.img``;
export const ProyectSubTitle = styled.p`
  color: #053745;

  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: ${breakpoint}) {
    font-size: 18px;
  }
`;

export const ProyectClient = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 40px;
  object-fit: contain;
`;
export const ProyectDefinition = styled.p`
  color: #525252;
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DemoButton = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  background-color: #053745;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 600;

  &:hover {
    background-color: #829b9a;
  }
`;

export const ImgTec = styled(GlassCard)`
  display: flex;
  flex-wrap: wrap;
  /* gap: 70px; */
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

export const ImgTecItem = styled.img`
  display: block;
  margin: 0 auto;
  max-height: 50px;
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.height || "80px"};
  object-fit: contain;
`;
