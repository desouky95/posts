import Breadcrumb, {
  BreadcrumbProps,
} from "@src/lib/components/Breadcrumb/Breadcrumb";
import { Flex } from "../Flex/Flex";
import styled from "styled-components";

type PageHeaderProps = {
  title: string;
  breadcrumb: BreadcrumbProps["items"];
};

const PageHeader = ({ breadcrumb, title }: PageHeaderProps) => {
  return (
    <StyledPageHeader
      width={"100%"}
      alignItems={"center"}
      justifyContent={"space-between"}
    >
      <h4>{title}</h4>
      <Breadcrumb items={breadcrumb} />
    </StyledPageHeader>
  );
};

export default PageHeader;

const StyledPageHeader = styled(Flex)`
  color: ${({ theme }) => theme.colors.grey[300]};
`;
