import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.principal.pure};
  padding: 60px 0 130px;
  @media (max-width: 768px) {
    padding: 90px 0 10px;
  }
`;
export const ContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  padding: 0 120px 80px;
  @media (max-width: 768px) {
    padding: 0 20px 80px;
  }
`;

export const SubContainerBox = styled.div`
  display: flex;
  align-items: center;
  gap: 70px;
  @media (max-width: 768px) {
    padding: 90px 0 10px;
    flex-direction: column;
  }
`;

export const SubContainerBoxDetail = styled.div`
  max-width: 726px;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
export const SubContainerBoxImg = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    max-width: 320px;
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
