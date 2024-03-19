import styled from "styled-components";

interface StyledProps {
  activo: number; // Cambié la prop a un número según la discusión anterior
}
export const ButtonsCookies = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 16px;

  @media (max-width: 1020px) {
    flex-direction: column-reverse;
    align-items: center;
    /* gap: 10p; */
  }
`;
export const AvisoCookies = styled.div<StyledProps>`
  display: ${(props) => (props.activo ? "block" : "none")};
  background: #fff;
  padding: 20px;
  width: calc(100% - 40px);
  max-width: 542px;
  line-height: 150%;
  border-radius: 10px;
  position: fixed;
  bottom: 20px;
  left: 20px;
  z-index: 100;
  padding-top: 40px;
  box-shadow: 0px 2px 20px 10px rgba(222, 222, 222, 0.25);
  text-align: center;
  @media (max-width: 1020px) {
    width: calc(100% - 80px);
    /* gap: 10p; */
  }
`;

export const CookieImage = styled.img`
  max-width: 100px;
  position: absolute;
  top: -50px;
  left: calc(50% - 50px);
`;

export const Paragraph = styled.p`
  margin-bottom: 48px;
  padding-top: 32px;
  font-size: 20px;
`;

export const Button = styled.button`
  width: 100%;
  background: #053746;
  border: none;
  color: #fefefe;
  text-align: center;
  padding: 15px 20px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s ease all;
  border-radius: 5px;
  font-size: 18px;
  &:hover {
    background: #50818b;
  }
  @media (max-width: 1020px) {
    width: calc(80%);
    /* gap: 10p; */
  }
`;
export const RejectCookies = styled.button`
  width: 100%;
  font-size: 16px;
  color: #929090;
  font-weight: 500;
  border: none;
  background: #fff;
  cursor: pointer;
`;

export const Link = styled.a`
  color: #4dbfff;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

export const Background = styled.div<StyledProps>`
  display: ${(props) => (props.activo ? "block" : "none")};
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
`;
