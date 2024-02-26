import { HTMLAttributes, forwardRef } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { darken } from "polished";

type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  ThemeBaseProps & { startIcon?: JSX.Element; endIcon?: JSX.Element };
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, startIcon, endIcon, ...props }, ref) => {
    return (
      <StyledButton {...props} ref={ref}>
        {startIcon}
        {children}
        {endIcon}
      </StyledButton>
    );
  }
);

const StyledButton = styled.button<ButtonProps>`
  padding: 0.45rem 0.9rem;
  font-size: 0%.9rem;
  min-height: 40px;
  border-radius: 0.15rem;
  cursor: pointer;
  display: flex;
  gap: 0.75rem;
  align-items: center;

  ${(props) =>
    css({
      border: `1px solid ${
        props.theme.colors[props.variant ?? "primary"].main
      }`,
      backgroundColor: props.theme.colors[props.variant ?? "primary"].main,
      boxShadow: `0px 2px 6px 0px ${
        props.theme.colors[props.variant ?? "primary"].main
      }`,
      color:
        props.theme.colors[props.variant ?? "primary"].accent ??
        props.theme.colors.white.main,
      "&:hover": {
        backgroundColor: darken(
          0.05,
          props.theme.colors[props.variant ?? "primary"].main
        ),
      },
    })}
`;
