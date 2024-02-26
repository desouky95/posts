import {
  LayoutProps,
  SpaceProps,
  layout,
  space,
  variant,
} from "@techstack/styled-system";
import { HTMLAttributes, HTMLProps, forwardRef } from "react";
import styled from "styled-components";

type IconButtonProps = HTMLAttributes<HTMLButtonElement> &
  ThemeBaseProps &
  SpaceProps &
  LayoutProps & {
    btnType?: "solid" | "contained";
  } & Pick<HTMLProps<HTMLButtonElement>, "as">;

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ size = "lg", btnType = "contained", as, ...props }, ref) => {
    return (
      <StyledButton
        {...props}
        size={size}
        btnType={btnType}
        ref={ref}
        as={as}
      />
    );
  }
);

const getVariantType = (type?: "solid" | "contained") => {
  if (type === "contained")
    return variant({ prop: "variant", key: "button.contained" });
  return variant({ prop: "variant", key: "button.solid" });
};
const StyledButton = styled.button<IconButtonProps>`
  background: none;
  border: none;
  display: grid;
  place-content: center;
  border-radius: 4px;
  color: #6c757d;
  cursor: pointer;
  ${space};
  ${layout};

  ${variant({
    prop: "size",
    key: "iconButton.sizes",
  })}
  ${(props) => getVariantType(props.btnType)};
`;
