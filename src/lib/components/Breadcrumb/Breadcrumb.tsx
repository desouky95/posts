import { Link } from "react-router-dom";
import styled from "styled-components";
import { MdArrowForwardIos } from "react-icons/md";
import { Spacing } from "@src/lib/utils/Spacing/Spacing";
import React from "react";

type BreadcrumbElement = {
  path?: string;
  title: string;
};
export type BreadcrumbProps = {
  items: Array<BreadcrumbElement>;
  withRoot?: boolean;
};

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <StyledBreadcrumb>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      {items.map((item, index) => (
        <React.Fragment key={item.path}>
          {index < items.length && (
            <Spacing mx={1}>
              <MdArrowForwardIos />
            </Spacing>
          )}
          <li>
            {item.path ? (
              <Link to={item.path}>{item.title}</Link>
            ) : (
              <a>{item.path}</a>
            )}
          </li>
        </React.Fragment>
      ))}
    </StyledBreadcrumb>
  );
};

export default Breadcrumb;

const StyledBreadcrumb = styled.ul`
  display: flex;
  list-style: none;
  align-items: center;
  text-decoration: none;
  padding: 0;
  margin: 0;

  a {
    /* text-decoration: none; */
    color: inherit;
  }

  li {
  }
`;
