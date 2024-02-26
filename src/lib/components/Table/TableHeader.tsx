import { Flex } from "@src/lib/layout/Flex/Flex";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";
import { useSearchParams } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";

type TableHeaderProps = {
  withSearch?: boolean;
  perPageOptions?: Array<number>;
};

export const TableHeader = ({
  perPageOptions = [5, 10, 20],
  withSearch = true,
}: TableHeaderProps) => {
  const [params, setParams] = useSearchParams();

  const handleChange = (key: string, value: any) => {
    params.set(key, value);
    setParams(params);
  };

  const [search, setSearch] = useState(params.get("search") ?? "");

  useEffect(() => {
    if (!search) {
      params.delete("search");
      setParams(params);
      return;
    }
    const timeout = setTimeout(() => {
      handleChange("search", search);
    }, 500);
    return () => clearTimeout(timeout);
  }, [search]);
  return (
    <Flex justifyContent={"space-between"} flexWrap={"wrap"} gap="1rem">
      <Flex alignItems="center" gridGap={"10px"}>
        <label>Display:</label>
        <Select
          value={params.get("perPage") ?? ""}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            handleChange("perPage", e.target.value)
          }
        >
          {perPageOptions.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
        </Select>
      </Flex>
      {withSearch && (
        <Flex alignItems="center" gridGap={"10px"}>
          <label>Search:</label>
          <Input
            value={search}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setSearch(e.target.value);
            }}
          />
        </Flex>
      )}
    </Flex>
  );
};
