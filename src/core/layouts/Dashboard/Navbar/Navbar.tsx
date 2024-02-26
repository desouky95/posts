import { routesMenu } from "@src/core/router/router";
import { NavItem, StyledNavBar } from "./Navbar.styled";
import { useLocation, useNavigate } from "react-router-dom";
import { useNavbar } from "@src/lib/providers/NavbarProvider/NavbarProvider";
import { motion } from "framer-motion";
import { Flex } from "@src/lib/layout/Flex/Flex";
import { useMediaQuery } from "usehooks-ts";
import { theme } from "@src/styles/theme/theme";
import { useOnClickOutside } from "usehooks-ts";
import { useRef } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { IconButton } from "@src/lib/components/IconButton/IconButton";
import { Box } from "@src/lib/layout/Box/Box";

export const Navbar = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { pathname } = useLocation();
  const { isOpen, toggle } = useNavbar();
  const navigate = useNavigate();
  const matches = useMediaQuery(
    `screen and (max-width : ${theme.breakpoints.md})`
  );

  useOnClickOutside(ref, () => {
    if (!matches) return;
    if (isOpen) toggle();
  });

  return (
    <StyledNavBar
      ref={ref}
      isOpen={isOpen}
      animate={{
        minWidth: matches ? "80vw" : isOpen ? "260px" : "70px",
        maxWidth: matches ? "80vw" : !isOpen ? "70px" : "unset",
        translateX: matches ? (isOpen ? "0%" : "-100%") : "unset",
        transition: {
          ease: "easeInOut",
        },
      }}
    >
      {matches && (
        <Box position={"absolute"} right={0}>
          <IconButton
            onClick={toggle}
            padding={"1rem"}
            variant="pink"
            btnType="solid"
          >
            <RiCloseCircleLine />
          </IconButton>
        </Box>
      )}
      <ul>
        {routesMenu.map((route) => {
          return (
            <NavItem
              key={route.path}
              selected={pathname.includes(route.path)}
              onClick={() => navigate(route.path)}
            >
              <Flex minWidth={"70px"} width="70px" justifyContent={"center"}>
                {route.icon}
              </Flex>
              <motion.span
                animate={{
                  // display: !isOpen ? "none" : "block",
                  visibility: !matches && !isOpen ? "hidden" : "visible",
                  transition: {
                    duration: 1000,
                    ease: "easeInOut",
                  },
                }}
                className="title"
              >
                {route.title}
              </motion.span>
            </NavItem>
          );
        })}
      </ul>
    </StyledNavBar>
  );
};
