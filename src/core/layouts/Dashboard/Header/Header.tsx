import { IconButton } from "@src/lib/components/IconButton/IconButton";
import { Flex } from "@src/lib/layout/Flex/Flex";
import { useNavbar } from "@src/lib/providers/NavbarProvider/NavbarProvider";
import { MdMenu } from "react-icons/md";
import {
  RiFullscreenLine,
  RiMoonLine,
  RiNotification3Line,
  RiSettings3Line,
} from "react-icons/ri";
import { RiApps2Line } from "react-icons/ri";
import styled from "styled-components";
export const Header = () => {
  const { toggle } = useNavbar();
  return (
    <StyledHeader
      px={"12px"}
      minHeight={"70px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Flex>
        <IconButton
          minWidth={"60px"}
          px={"6px"}
          onClick={toggle}
          btnType="solid"
          size="lg"
        >
          <MdMenu />
        </IconButton>
      </Flex>
      <Flex gridGap={"1.5rem"}>
        <IconButton>
          <RiNotification3Line />
        </IconButton>
        <IconButton>
          <RiApps2Line />
        </IconButton>
        <IconButton display={{ sm: "none", md: "block" }}>
          <RiSettings3Line />
        </IconButton>
        <IconButton display={{ sm: "none", md: "block" }}>
          <RiMoonLine />
        </IconButton>
        <IconButton display={{ sm: "none", md: "block" }}>
          <RiFullscreenLine />
        </IconButton>
      </Flex>
    </StyledHeader>
  );
};

const StyledHeader = styled(Flex)`
  box-shadow: 0px 0px 35px 0px rgba(154, 161, 171, 0.15);
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 4;
`;
