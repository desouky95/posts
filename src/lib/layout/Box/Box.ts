import styled from "styled-components";
import {
  color,
  layout,
  LayoutProps,
  ColorProps,
  space,
  SpaceProps,
  PositionProps,
  position,
} from "@techstack/styled-system";

export const Box = styled.div<LayoutProps & ColorProps & SpaceProps & PositionProps>`
  ${color}
  ${layout}
  ${space}
  ${position}
`;
