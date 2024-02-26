import {
  FlexboxProps,
  GridProps,
  flexbox,
  grid,
} from "@techstack/styled-system";
import styled from "styled-components";

type GridBoxProps = GridProps & FlexboxProps;
export const Grid = styled.div<GridBoxProps>`
  display: grid;
  ${grid}
  ${flexbox}
`;
