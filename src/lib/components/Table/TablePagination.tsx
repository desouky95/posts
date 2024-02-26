import { Flex } from "@src/lib/layout/Flex/Flex";
import { Typography } from "@src/lib/utils/Typography/Typography";
import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

type TablePaginationProps = {
  total: number;
  page: number;
  perPage: number;
  range?: number;
};

export const TablePagination = ({
  page,
  perPage,
  total,
  range = 3,
}: TablePaginationProps) => {
  const [params, setParams] = useSearchParams();

  const totalPages = useMemo(
    () => Math.floor(total / perPage),
    [total, perPage]
  );

  const currentPages = useMemo(() => {
    if (page <= range)
      return Array(range)
        .fill(0)
        .map((_v, i) => i + 1);

    const numOfGenerations = Math.floor((range - 1) / 2);

    let next =
      page === totalPages
        ? []
        : Array(numOfGenerations)
            .fill(0)
            .map((_v, i, _arr) => page + i + 1);
    let prev = Array(numOfGenerations)
      .fill(0)
      .map((_v, i, arr) => page - arr.length - i);

    return [...prev, page, ...next];
  }, [page, totalPages]);

  useEffect(() => {
    if (page <= totalPages) return;
    params.set("page", totalPages.toString());
    setParams(params);
  }, [totalPages]);

  const handlePageChange = (new_page: number) => {
    if (new_page === page) return;

    params.set("page", new_page.toString());
    setParams(params);
  };

  const handleNavigation = (type: "prev" | "next") => {
    if (type === "prev") params.set("page", (page - 1).toString());
    else params.set("page", (page + 1).toString());
    setParams(params);
  };
  return (
    <Flex
      alignItems={"center"}
      justifyContent={{ sm: "center", md: "space-between" }}
      flexWrap="wrap"
      gap="2rem"
    >
      <Typography as="span" fontSize={"14px"}>
        Showing posts {(page - 1) * perPage + 1} to{" "}
        {Math.min(perPage * page, total)} of
        {total}
      </Typography>
      <Flex gap="4px">
        <PaginationCell
          selected={false}
          disabled={page === 1}
          onClick={() => handleNavigation("prev")}
        >
          <MdChevronLeft />
        </PaginationCell>
        {currentPages.map((_page) => (
          <PaginationCell
            onClick={() => handlePageChange(_page)}
            selected={page === _page}
            key={_page.toString()}
          >
            {_page}
          </PaginationCell>
        ))}
        <PaginationCell
          selected={false}
          disabled={page == totalPages}
          onClick={() => handleNavigation("next")}
        >
          <MdChevronRight />
        </PaginationCell>
      </Flex>
    </Flex>
  );
};

const PaginationCell = styled.button<{ selected: boolean }>`
  border: none;
  background-color: transparent;
  width: 38px;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  display: grid;
  place-content: center;
  cursor: pointer;
  background-color: ${(p) => p.selected && "#727cf5"};
  color: ${(p) => p.selected && "#FFF"};
  &:hover {
    background-color: ${(p) => !p.selected && !p.disabled && "#f6f7fb"};
  }
`;
