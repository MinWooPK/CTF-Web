import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.principal.pure};
`;
export const JobContainer = styled.div`
  padding: 160px 120px 130px;
  @media (max-width: 768px) {
    padding: 90px 0 10px;
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
