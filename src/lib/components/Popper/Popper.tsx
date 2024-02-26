import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { usePopper } from "react-popper";
import styled from "styled-components";

type PopperProps = {
  title?: string;
};
export const Popper = ({ children, title }: PropsWithChildren<PopperProps>) => {
  const referenceElement = useRef<HTMLElement | null>(null);
  const popperElement = useRef<HTMLElement | null>(null);
  const [show, setShow] = useState(false);

  const { attributes, styles } = usePopper(
    referenceElement.current,
    popperElement.current,
    {
      placement: "top",
      strategy: "absolute",
    }
  );
  useEffect(() => {
    referenceElement.current?.addEventListener("mouseover", handleMouseOver);
    referenceElement.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      referenceElement.current?.removeEventListener(
        "mouseover",
        handleMouseOver
      );
      referenceElement.current?.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  const handleMouseOver = () => {
    setShow(true);
  };
  const handleMouseLeave = () => {
    setShow(false);
  };

  return (
    <>
      <StyledPopper
        ref={popperElement}
        {...attributes.popper}
        style={{ ...styles.popper, visibility: show ? "visible" : "hidden" }}
      >
        {title}
      </StyledPopper>
      <span ref={referenceElement}>{children}</span>
    </>
  );
};

const StyledPopper = styled.span`
  padding: 0.5rem;
  border-radius: 5px;
  background-color: ${(p) => p.theme.colors.grey[100]};
  font-size: 10px;
`;
