import styled from "styled-components";

export const TypingTextStyled = styled.div`
  font-size: 18.793px;
  font-style: normal;
  font-family: "Fira Code", "Source Code Pro", Consolas, monospace;
  color: #053745;
  height: 19px;
  /* font-weight: 400; */
  font-weight: 600;
  line-height: normal;
  white-space: nowrap;
  border-right: 3px solid #053745; /* cursor */
  width: fit-content;
  overflow: hidden;
  animation: blink-caret 0.75s step-end infinite;

  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: #053745;
    }
  }
`;
