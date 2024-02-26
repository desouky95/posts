import {
  LayoutProps,
  SpaceProps,
  layout,
  space,
} from "@techstack/styled-system";
import styled from "styled-components";

type SpacingProps = LayoutProps & SpaceProps;
export const Spacing = styled.div<SpacingProps>`
  ${layout}
  ${space}
`;
