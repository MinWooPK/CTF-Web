import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.principal.pure};
  padding: 160px 0 130px;
  @media (max-width: 768px) {
    padding: 90px 0 10px;
  }
`;
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 0 120px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;
export const ContainerTitle = styled.div`
  color: #1c1c1c;
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 768px) {
    font-size: 44px;
  }
`;
export const ContainerDetail = styled.div`
  color: #1c1c1c;
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  padding-top: 8px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;
export const ContainerSubTitle = styled.div`
  color: #2e838f;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  @media (max-width: 1020px) {
    font-size: 18px;
  }
`;