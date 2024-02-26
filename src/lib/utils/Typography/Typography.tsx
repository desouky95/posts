import {
  space,
  SpaceProps,
  typography,
  TypographyProps as TypoProps,
} from "@techstack/styled-system";
import { HTMLProps } from "react";
import styled from "styled-components";

type TypographyProps = HTMLProps<HTMLSpanElement> & TypoProps & SpaceProps;

export const Typography = ({
  as = "span",
  children,
  ...props
}: TypographyProps) => {
  return (
    <Component {...props} as={as}>
      {children}
    </Component>
  );
};

const Component = styled.span<TypographyProps>`
  color: rgb(108, 117, 125);
  ${typography}
  ${space}
`;
