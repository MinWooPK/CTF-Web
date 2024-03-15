import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.principal.pure};
`;
export const JobContainer = styled.div`
  padding: 160px 120px 130px;
  @media (max-width: 768px) {
    padding: 90px 11px 10px;
  }
`;
export const JobDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-top: 80px;
`;
export const JobTitle = styled.h1`
  color: #1c1c1c;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
`;
export const JobDetail = styled.p`
  color: #1c1c1c;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
export const JobSubDetailBold = styled.span`
  font-weight: 500;
`;

export const JobSubDetail = styled.p`
  color: #2e838f;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const JobThemeSpecialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
`;
export const JobThemeSpecial = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: center;
  padding-top: 60px;
  align-items: center;
`;

export const JobThemeSpecialTitle = styled.h3`
  color: #5a9b9e;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const JobThemeSpecialDetail = styled.div`
  border-radius: 16px;
  padding: 10px 0;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  cursor: pointer;
  box-shadow: 0px 5px 11px rgba(164, 164, 164, 0.25);
  @media (max-width: 425px) {
    width: 169px;
    height: 288px;
  }
`;
export const JobThemeSpecialDetailP = styled.p`
  color: #a7a6a6;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
