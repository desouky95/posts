import styled from "styled-components";
import { motion } from "framer-motion";
type NavItemProps = {
  selected?: boolean;
};
export const NavItem = styled.li<NavItemProps>`
  color: ${({
    theme: {
      colors: { grey },
    },
    selected,
  }) => (selected ? grey[100] : grey[300])};

  display: flex;
  align-items: center;
  min-height: 56px;
  white-space: nowrap;

  &::before {
    content: none;
  }
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.grey[100]};
  }

  &.title {
    flex: 1;
  }
`;

type NavbarProps = {
  isOpen: boolean;
};

export const StyledNavBar = styled(motion.nav)<NavbarProps>`
  background-color: ${({ theme }) => theme.colors.grey[500]};
  min-height: 100vh;
  position: fixed;
  inset-inline-start: 0;
  z-index: 5;
  /* transform: ${(p) => {
    return `translateX(${p.isOpen ? -100 : 0}%)`;
  }}; */

  ${({ theme: { breakpoints } }) => `@media(min-width : ${breakpoints.md}){
    height: 100vh;
    position : sticky;
    top : 0;
    transform : unset;
  }`}
`;
