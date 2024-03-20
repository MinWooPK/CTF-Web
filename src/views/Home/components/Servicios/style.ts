import { motion } from "framer-motion";
import styled from "styled-components";

export const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
  padding: 50px 0 140px;
  @media (max-width: 768px) {
    gap: 48px;
    padding: 50px 0 80px;
  }
`;
export const ServiceSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 200px;
  @media (max-width: 768px) {
    gap: 140px;
  }
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
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
export const ServiceDetailSubScetion = styled(motion.div)<{
  isReversed?: boolean;
}>`
  display: flex;
  padding: 20px 120px;
  gap: 120px;
  align-items: center;
  ${({ isReversed }) => isReversed && "flex-direction: row-reverse;"}
  @media (min-width: 1021px) and (max-width: 1280px) {
    padding: 20px 40px;
    gap: 60px;
  }
  @media (max-width: 1020px) {
    flex-direction: column-reverse;
    text-align: start;
    padding: 20px 24px;
    gap: 40px;
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
  display: flex;
  @media (max-width: 1020px) {
    justify-content: center;
    /* width: 292px; */
  }
`;
export const ServiceHomeSVG = styled.div`
  width: 463px;
  @media (max-width: 1020px) {
    width: 292px;
  }
`;
