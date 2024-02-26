import { HTMLAttributes } from "react";
import styled from "styled-components";

type CheckboxProps = HTMLAttributes<HTMLInputElement>;

export const Checkbox = (props: CheckboxProps) => {
  return <Component {...props} />;
};

const Component = styled.input.attrs({ type: "checkbox" })<CheckboxProps>`
  appearance: none;
  border-radius: 0.25em;
  width: 1.25em;
  height: 1.25em;
  color: #727cf5;
  cursor: pointer;
  aspect-ratio: 1 / 1;
  border: 0.15em solid #dee2e6;
  border-radius: 0.25em;
  transform: translateY(-0.075em);

  display: grid;
  place-content: center;
  &:focus-within {
    box-shadow: 0 0 0.15rem rgba(114, 124, 245, 0.25);
  }
  &::before {
    content: "";
    display: block;
    width: 0.65em;
    height: 0.65em;
    clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
    transform: scale(0);
    transform-origin: center;
    transition: 120ms transform ease-in-out;
    background-color: #fff;
  }

  &:checked {
    background-color: #727cf5;
    &::before {
      transform: scale(1);
    }
  }
`;
