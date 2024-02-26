import { LayoutProps, layout } from "@techstack/styled-system";
import { HTMLProps, forwardRef } from "react";
import styled from "styled-components";

type TextAreaProps = HTMLProps<HTMLTextAreaElement> & LayoutProps;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    return <StyledTextArea ref={ref} {...props} />;
  }
);

const StyledTextArea = styled.textarea`
  padding: 0.28rem 0.8rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
  color: ${(p) => p.theme.colors.grey[500]};
  border: ${(p) => `1px solid ${p.theme.colors.grey[200]}`};
  outline: none;
  line-height: 1.5;

  ${layout}
`;
