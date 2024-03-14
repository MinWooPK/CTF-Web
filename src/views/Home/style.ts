import styled, { keyframes } from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.principal.pure};

  /* color: ${({ theme }) => theme.colors.principal.pure}; */
  /* display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 10px;
  position: relative;
  padding: 4rem 7rem 0; */
  /* clip-path: polygon(100% 0, 100% 90%, 50% 100%, 0 90%, 0 0); */
  /* @media (max-width: 768px) {
    padding: 5rem 1rem 0;
    grid-template-columns: 1fr;
    min-height: 400px;
  } */
`;

// export const LeftIntroduction = styled.div`
//   z-index: 1;
//   display: flex;
//   flex-direction: column;
//   gap: 1rem;
//   padding: 2rem 0 7rem;
// `;
// export const RightIntroduction = styled.div`
//   position: relative;
//   z-index: 5;
//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// export const TitleIntroduction = styled.h1`
//   padding: 8px;
//   border-radius: 5px;
//   padding-left: 20px;
//   padding-right: 20px;
//   width: fit-content;
//   font-size: 15px;
//   background-color: ${({ theme }) => theme.colors.principal.secondary};
//   color: ${({ theme }) => theme.colors.principal.pure};
// `;
// export const DefinitionIntroduction = styled.p`
//   font-weight: 300;
//   font-size: 1.5rem;
//   line-height: 30px;
// `;

// export const Section = styled.section`
//   background-color: ${({ theme }) => theme.colors.principal.pure};
//   display: flex;
//   justify-content: center;
// `;
