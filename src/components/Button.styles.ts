import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "blue",
  secondary: "yellow",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  padding: 4px;
  margin: 4px;
  border: 0;
  border-radius: 4px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

  /* ${(props) => {
    return css`
      background-color: ${buttonVariants[props.variant]};
    `;
  }} */
`;
