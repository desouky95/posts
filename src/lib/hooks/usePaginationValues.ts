import { useSearchParams } from "react-router-dom";

export const usePaginationValues = () => {
  const [params] = useSearchParams();

  return {
    page: params.get("page") ? Number(params.get("page")) : 1,
    perPage: params.get("perPage") ? Number(params.get("perPage")) : 5,
    search: params.get("search"),
  };
};
