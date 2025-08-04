import styled from "styled-components";
const breakpoint = "1024px";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 575px;
  flex: 1 1 calc(50% - 13px);
  max-width: calc(50% - 13px);
  gap: 20px;
  background: #f7fafa;
  border-radius: 20px;

  @media (max-width: ${breakpoint}) {
    flex: 1 1 100%;
    max-width: 100%;
  }
`;

export const CardMain = styled.div`
  margin: auto;
  padding: auto;
  /* padding: 110px 80px; */
  max-width: 575px;
  box-sizing: border-box;
  width: 100%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  @media (max-width: ${breakpoint}) {
    padding: 0 30px;
  }
`;

export const Title = styled.h3`
  color: #053745;

  font-size: 40px;
  font-weight: 700;
  max-width: 250px;
  line-height: 150%; /* 60px */
  letter-spacing: -0.8px;
  @media (max-width: ${breakpoint}) {
    font-size: 36px;
  }
`;

export const Detail = styled.p`
  font-size: 20px;
  color: #666;
  max-width: 400px;
`;

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 40px 0 30px;
`;
export const IconWrapper = styled.div`
  border-radius: 8px;
  border: 1px solid #b1b8b8;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px;

  width: 56px;
  height: 58px;
  box-sizing: border-box;
  svg,
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

export const CardWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const DetailButton = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  border: 3px solid ${({ $color }) => $color || "#ccc"};
  background-color: white;
  color: ${({ $color }) => $color || "#000"};

  &:hover {
    background-color: ${({ $hoverColor }) => $hoverColor || "#ccc"};
    border: 3px solid ${({ $hoverColor }) => $hoverColor || "#ccc"};
    color: white;
  }
`;
