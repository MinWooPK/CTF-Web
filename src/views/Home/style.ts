import styled, { keyframes } from "styled-components";

export const HomeMainContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 40px;
  height: 600px;
`;
export const HomeTitle = styled.div`
  color: #1c1c1c;
  text-align: center;
  font-size: 56px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 1020px) {
    font-size: 44px;
  }
`;
export const HomeSubTitle = styled.div`
  color: #a7a6a6;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1020px) {
    font-size: 16px;
  }
`;
export const HomeDetail = styled.div`
  color: #1c1c1c;
  font-size: 28px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  max-width: 592px;
  @media (max-width: 1020px) {
    font-size: 20px;
    max-width: 361px;
  }
  span {
    color: #2e838f;
  }
`;
// s
export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.principal.pure};
`;
