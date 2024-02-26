import { HTMLProps, forwardRef } from "react";
import styled from "styled-components";

type SelectProps = HTMLProps<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (props, ref) => {
    return <StyledSelect ref={ref} {...props} />;
  }
);

const StyledSelect = styled.select`
  padding: 0.28rem 0.8rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  color: ${(p) => p.theme.colors.grey[500]};
  border: ${(p) => `1px solid ${p.theme.colors.grey[200]}`};
  outline: none;
  line-height: 1.5;
  padding-inline-end: 1.7rem;
`;
