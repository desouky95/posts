import { getValueAndUnit } from "polished";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled, { useTheme } from "styled-components";
import { useMediaQuery, useResizeObserver } from "usehooks-ts";
import { Checkbox } from "../Checkbox/Checkbox";
import { Flex } from "@src/lib/layout/Flex/Flex";

type TableColumn = {
  title: string;
  width?: string;
  key?: string;
};

type TableProps<T> = {
  columns: Array<TableColumn>;
  renderData?: (cell: typeof StyledCell) => JSX.Element;
  data?: T[];
  keys?: Array<keyof T>;
  renderItem?: (data: {
    item: T;
    Cell: typeof StyledCell;
    config: {
      inViewColumns: Array<TableColumn>;
      outViewColumns: Array<TableColumn>;
    };
  }) => JSX.Element;
  renderExtra?: (data: { item: T; columns: Array<TableColumn> }) => JSX.Element;
};

export const Table = <T,>({ columns, data, renderItem }: TableProps<T>) => {
  const ref = useRef<HTMLTableElement | null>(null);
  const { width } = useResizeObserver({
    ref,
  });

  const theme = useTheme();

  const isMobile = useMediaQuery(
    `screen and (max-width: ${theme.breakpoints.md})`
  );

  useEffect(() => {
    if (!isMobile) return;

    const inactiveColumns = document.querySelectorAll(
      "tbody > tr > td:not(:first-child)"
    );
    inactiveColumns.forEach(function (col) {
      col.setAttribute("aria-hidden", "true");
    });
  }, [isMobile]);

  const cellWidth = useMemo(() => {
    const placedWidth = columns.reduce(
      (acc, curr) => acc + (curr.width ? getValueAndUnit(curr.width)[0] : 0),
      0
    );

    const availableWidth = width! - placedWidth;
    const toDistributeColumns = columns.filter((_) => !_.width).length;
    const idealWidth = availableWidth / toDistributeColumns;

    return idealWidth;
  }, [width, columns]);

  const viewConfig = useMemo(() => {
    const columnsToView = Math.floor(width! / (170 + 50));
    if (columnsToView < 1)
      return { inViewColumns: columns.slice(0, 1), outViewColumns: [] };
    const inViewColumns = columns.slice(0, columnsToView);
    const outViewColumns = columns.slice(columnsToView, columns.length);

    return {
      inViewColumns,
      outViewColumns,
    };
  }, [width, columns, cellWidth]);

  const { inViewColumns, outViewColumns } = viewConfig;
  return (
    <div className="table-wrapper">
      <StyledTable ref={ref}>
        <thead>
          <tr>
            {!isMobile && (
              <StyledHeader style={{ width: "30px" }}>
                <Checkbox />
              </StyledHeader>
            )}
            {columns.map((column) => (
              <StyledHeader
                style={{
                  width:
                    inViewColumns.length == 1
                      ? "100%"
                      : column.width ?? `${cellWidth}px`,
                }}
                key={column.title}
              >
                {column.title}
              </StyledHeader>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, _index) => {
            return (
              <TableRow
                columns={columns}
                item={item}
                outViewColumns={outViewColumns}
                renderItem={() =>
                  renderItem?.({
                    item,
                    Cell: StyledCell,
                    config: viewConfig,
                  }) as any
                }
              />
            );
          })}
        </tbody>
      </StyledTable>
    </div>
  );
};

const TableRow = <T,>({
  renderItem,
}: {
  item: T;
  outViewColumns: Array<TableColumn>;
  renderItem?: () => JSX.Element;
  renderExtra?: () => JSX.Element;
} & Pick<TableProps<T>, "renderExtra" | "renderItem" | "columns">) => {
  const theme = useTheme();

  const isMobile = useMediaQuery(
    `screen and (max-width: ${theme.breakpoints.md})`
  );
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <tr onClick={() => setOpen(!open)} className={open ? "row-active" : ""}>
        {!isMobile && (
          <StyledCell>
            <Flex gap="6px">
              <Checkbox />
            </Flex>
          </StyledCell>
        )}
        {renderItem?.()}
      </tr>
    </React.Fragment>
  );
};

const StyledTable = styled.table`
  width: 100%;

  ${(p) => `@media screen and (max-width : ${p.theme.breakpoints.md}){
    thead tr > *:not(:first-child) {
    display: none;
  }
  
  
  thead tr > *:first-child {
    padding-left: 4rem;
  }

  tbody,
  tbody tr,
  tbody td {
    display: flex;
    flex-direction: column;
    word-break: break-all;
  }

  .row-active td:first-child {
    margin-bottom: -1rem;
  }

  tbody td:not(:first-child) {
  }
  
  tbody td:first-child {
      flex-direction: row;
    align-items: center;
  }

  tbody tr:not(.row-active) > *:not(:first-child) {
    max-width: 0;
    max-height: 0;
    overflow: hidden;
    padding: 0;
  }

  tbody button {
    display: inline-block;
  }

  tbody td:not(:first-child)::before {
    display: block;
    font-weight: 600;
  }

  .table-wrapper {
    max-width: 568px;
  }

  

  
  }`}
`;

const StyledHeader = styled.th`
  background-color: #eef2f7;
  padding: 1rem;
  border-bottom: 1px solid #eef2f7;
  text-align: start;
  font-size: 14px;
  font-weight: 700;
`;

const StyledCell = styled.td`
  border-bottom: 1px solid rgb(222, 226, 230);
  padding: 1rem;
`;
