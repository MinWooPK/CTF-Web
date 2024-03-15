import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
  padding: 50px 0 140px;
`;
export const ServiceSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 100px;
`;

export const ConctactDetail = styled.p`
  color: #1c1c1c;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const ServiceDetail = styled.h2`
  color: #ccc;
  font-size: 40px;
  font-style: normal;
  font-weight: 250;
  line-height: normal;
`;
export const ServiceDetailSubScetion = styled.div<{ isReversed?: boolean }>`
  display: flex;
  padding: 20px 120px;
  gap: 140px;
  align-items: center;
  ${({ isReversed }) => isReversed && "flex-direction: row-reverse;"}
  @media (max-width: 1020px) {
    flex-direction: column;
    text-align: start;
    padding: 20px 10px;
  }
`;
export const ServiceDetailSubScetion1 = styled.div`
  flex: 1;
`;

export const ServiceDetailSubScetion2 = styled.div`
  flex: 1;
`;
export const ServiceDetailSubTitle = styled.h1`
  color: #1c1c1c;
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  @media (max-width: 1020px) {
    font-size: 32px;
  }
`;
export const ServiceDetailSubTitleDetail = styled.p`
  color: #1c1c1c;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  max-width: 606px;
  padding: 32px 0 0;
  @media (max-width: 1020px) {
    font-size: 18px;
  }
`;

export const ServiceDetailButton = styled.div`
  padding-top: 56px;
`;
