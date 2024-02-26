import {
  ColorProps,
  FlexboxProps,
  GridProps,
  LayoutProps,
  SpaceProps,
  color,
  flexbox,
  grid,
  layout,
  space,
} from "@techstack/styled-system";
import styled from "styled-components";

const BaseFlex = styled.div<
  LayoutProps & FlexboxProps & ColorProps & Pick<GridProps, "gridGap"> & SpaceProps
>`
  ${layout}
  ${flexbox}
${grid}
${space}
${color}
`;

export const Flex = styled(BaseFlex)`
  display: flex;
`;

export const FlexItem = styled(BaseFlex)``;
