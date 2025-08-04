import styled from "styled-components";
const breakpoint = "1024px";

export const Form = styled.form`
  max-width: 400px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 64px;
`;

export const Label = styled.label`
  color: #1c1c1c;

  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  background: #f4f4f4;
  border: none;
  color: #1c1c1c;

  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const Textarea = styled.textarea`
  padding: 8px;
  /* font-size: 1rem; */
  resize: vertical;
  min-height: 80px;
  border-radius: 6px;
  background: #f4f4f4;
  border: none;
  color: #1c1c1c;

  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Button = styled.button`
  background-color: #053746;
  color: white;
  padding: 10px;
  font-weight: 700;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  transition: opacity 0.3s ease;
`;

export const ContactUsMain = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "bgColor",
})`
  background-color: ${(props) => props.bgColor || "#f7fafa"};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0 80px;
`;

export const ContactUsContainer = styled.div`
  padding: 64px 96px 64px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #dedede;
  max-width: 700px;
  max-height: 745px;
  @media (max-width: ${breakpoint}) {
    padding: 20px;
  }
`;

export const ContactUsContainerTitle = styled.h1`
  color: #1c1c1c;
  text-align: center;
  font-family: Urbanist;
  font-size: 56px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
