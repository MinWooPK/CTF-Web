import styled from "styled-components";

interface ContactSectionProps {
  secondary?: boolean;
}

export const ContactSection = styled.div<ContactSectionProps>`
  min-height: 462px;
  background: ${(props) => (props.secondary ? "#fff" : "#fafafa")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

export const ConctactDetail = styled.p`
  color: #1c1c1c;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const ConctactSubDetail = styled.div`
  color: #1c1c1c;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-top: 56px;
  @media (max-width: 768px) {
    font-size: 18px;
    @media (max-width: 768px) {
      padding: 0 20px;
    }
  }
`;
