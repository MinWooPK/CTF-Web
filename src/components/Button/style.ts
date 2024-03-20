import styled from "styled-components";

interface StyledButtonProps {
  color?: string;
  colorHover?: string;
  bgColor?: string;
  bgHoverColor?: string;
  type: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  cursor: pointer;
  position: relative;
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.colorHover};
  }

  ${(props) =>
    props.type === "primary" &&
    `
    width: 361px;
    height: 48px;
    color: #FEFEFE;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    flex-shrink: 0;
    border: 1px;
    border-radius: 8px;
    background: #053746;
    box-shadow: 0px 23.364px 51.921px rgba(189, 189, 189, 0.30);
     @media (max-width: 768px) {
      width:310px
  }
  @media (max-width: 525px) {
      width:100%
  }
  span {
      position: relative;
    }

    span::before {
      content: "";
      position: absolute;
      bottom: -3px; /* Mover el subrayado ligeramente debajo del texto */
      width: 0;
      height: 2px;
      background-color: #FFF; /* Color del subrayado */
      transition: width 0.35s ease;
    }

   
  

    &:hover span::before,
    &:hover span::after {
      width: 100%; /* Cuando se hace hover, se extiende a lo ancho del texto */
    }
  
  `}

  ${(props) =>
    props.type === "secondary" &&
    `
    cursor:pointer;
    border: 1px solid;
    border-radius: 8px;
    color: #1C1C1C;
    width: 140px;
    height: 40px;
    flex-shrink: 0;
    font-size: 16px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    line-height: normal;
    background: #FAFAFA;
        &:hover {
      background: #f0f0f0;
    }
    

  `}
  ${(props) =>
    props.type === "terciary" &&
    `
    cursor:pointer;
    border: 1px solid;
    border-radius: 8px;
    color: #053746;
    height: 56px;
    flex-shrink: 0;
    font-size: 20px;
    font-style: normal;
    text-align: center;
    font-weight: 500;
    line-height: normal;
    background: #FAFAFA;
        &:hover {
      background: #053746;
      color: #fff;
    }
    padding:16px 50px;
    @media (max-width: 768px) {
      font-size:18px;
      width:265px
    padding: 13px 66px; /* Cambiar padding en dispositivos móviles */
  }


  `}
`;
