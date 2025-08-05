// style.js
// import EtherealHome3 from "@assets/icons/EtherealHome3.jpg";
import EtherealHome4 from "@assets/icons/EtherealHome4.jpg";

import styled from "styled-components";
const breakpoint = "1024px";

export const AboutUsMain = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;

  background-image: url(${EtherealHome4});
  background-size: cover;

  background-repeat: no-repeat;
  background-position: left center;
  background-size: auto;
  @media (max-width: ${breakpoint}) {
    padding: 20px;
  }
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const AboutUsTitleDiv = styled.div`
  display: flex;
  gap: 30px;
`;
export const AboutUsTitle = styled.div`
  color: #1c1c1c;
  white-space: nowrap;
  font-family: Urbanist;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const AboutUsIcon = styled.div`
  /* background: rgba(255, 255, 255, 0.1); */
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const AboutUsSubTitle = styled.div`
  padding-top: 54px;
  color: #3f3f3f;
  font-family: Urbanist;
  font-size: 28px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  max-width: 700px;
  padding-bottom: 100px;
`;
export const BlurSection = styled.section`
  padding: 36px;
  @media (max-width: ${breakpoint}) {
    padding: 0px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const AboutUsBlur = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 21px 48px;
  gap: 50px;
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  width: fit-content;
`;
export const AboutUsButton = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  background-color: #053745;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: 500;

  &:hover {
    background-color: #829b9a;
  }
`;

export const ButtonContainer = styled.div`
  border: 1px solid #fefefe;
  padding: 12px 70px;
  border-radius: 8px;
`;
export const InfoContact = styled.div`
  color: #f7f7f7;
  max-width: 546px;
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
