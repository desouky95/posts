import { IconButton } from "@src/lib/components/IconButton/IconButton";
import { Table } from "@src/lib/components/Table/Table";
import { TableHeader } from "@src/lib/components/Table/TableHeader";
import { TablePagination } from "@src/lib/components/Table/TablePagination";
import { usePagination } from "@src/lib/hooks/usePagination";
import { usePaginationValues } from "@src/lib/hooks/usePaginationValues";
import { Spacing } from "@src/lib/utils/Spacing/Spacing";
import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { IoMdEye } from "react-icons/io";
import { Flex } from "@src/lib/layout/Flex/Flex";
import { useMediaQuery } from "usehooks-ts";
import { useTheme } from "styled-components";
import { Popper } from "@src/lib/components/Popper/Popper";
import { useNavigate } from "react-router-dom";
import { useDeletePost } from "@src/pages/posts/store/hooks/useGetPosts";

type PostsTableProps = { data: Post[] };
export const PostsTable = ({ data }: PostsTableProps) => {
  const navigate = useNavigate();
  const { page, perPage, search } = usePaginationValues();
  const { data: posts } = usePagination({
    data,
    page,
    perPage,
    search,
    searchKey: "title",
  });

  const theme = useTheme();
  // const isMobile = useMediaQuery(`(max-width : ${theme.breakpoints.md})`);

  const { mutate, isLoading } = useDeletePost();

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <TableHeader />
      <Spacing my="1rem" />

      <Table
        data={posts}
        columns={[
          { title: "Title", width: "40%" },
          { title: "Body", width: "50%", key: "body" },
          { title: "Actions", key: "actions" },
        ]}
        renderItem={({ Cell, item: post }) => {
          return (
            <>
              <Cell>{post.title}</Cell>
              <Cell>{post.body}</Cell>
              <Cell>
                <Flex>
                  <Popper title="View">
                    <IconButton
                      size="md"
                      onClick={() => navigate(`/posts/${post.id}`)}
                    >
                      <IoMdEye />
                    </IconButton>
                  </Popper>
                  <Popper title="Edit">
                    <IconButton
                      size="md"
                      onClick={() => navigate(`/posts/edit/${post.id}`)}
                    >
                      <MdEditNote />
                    </IconButton>
                  </Popper>
                  <Popper title="Delete">
                    <IconButton size="md" onClick={() => mutate(post.id)}>
                      <MdDelete />
                    </IconButton>
                  </Popper>
                </Flex>
              </Cell>
            </>
          );
        }}
      />
      <Spacing my="1rem" />
      <TablePagination page={page} perPage={perPage} total={data.length} />
    </>
  );
};
