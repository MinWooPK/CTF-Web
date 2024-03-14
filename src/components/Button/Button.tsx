import React, { ReactNode, MouseEvent } from "react";
import { StyledButton } from "./style";

interface ButtonProps {
  children: ReactNode;
  onHandleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  colorHover?: string;
  bgColor?: string;
  bgHoverColor?: string;
  type: "primary" | "secondary" | "terciary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onHandleClick,
  color,
  colorHover,
  bgColor,
  bgHoverColor,
  type,
  ...otherProps
}) => {
  return (
    <StyledButton
      onClick={onHandleClick}
      color={color}
      colorHover={colorHover}
      bgColor={bgColor}
      bgHoverColor={bgHoverColor}
      type={type}
      {...otherProps}
    >
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
