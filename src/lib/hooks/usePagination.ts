type UsePaginationArgs<T extends Object> = {
  data: T[];
  page?: number;
  perPage?: number;
  search?: string | null;
  searchKey?: string;
};

export const usePagination = <T extends Object>({
  data,
  page = 1,
  perPage = 5,
  searchKey,
  search,
}: UsePaginationArgs<T>) => {
  const paginatedData = data
    .filter((_) => {
      if (!searchKey || !search) return true;
      return _[searchKey as keyof T]?.toString().includes(search);
    })
    .slice((page - 1) * perPage, page * perPage);

  return { data: paginatedData };
};
