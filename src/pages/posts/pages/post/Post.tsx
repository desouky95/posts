import { Box } from "@src/lib/layout/Box/Box";
import { Flex } from "@src/lib/layout/Flex/Flex";
import PageHeader from "@src/lib/layout/PageHeader/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { useGetPost } from "../../store/hooks/useGetPosts";
import { Typography } from "@src/lib/utils/Typography/Typography";
import { Spacing } from "@src/lib/utils/Spacing/Spacing";
import { IconButton } from "@src/lib/components/IconButton/IconButton";
import { MdEditNote } from "react-icons/md";

const Post = () => {
  const { colors } = useTheme();

  const { id } = useParams();

  const { data, isLoading } = useGetPost(id);

  const navigate = useNavigate();

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <PageHeader
        title="Post Details"
        breadcrumb={[{ title: "Posts Details", path: "/posts" }]}
      />
      <Flex
        backgroundColor={colors.white.main}
        width="100%"
        px="1.5rem"
        py="1.5rem"
        flexDirection={{ sm: "column", md: "row" }}
        gridGap={{ sm: "1rem", md: "0" }}
      >
        <Flex flex={1}>
          <Flex width="100%" justifyContent={"center"}>
            <img src="https://picsum.photos/400/300" />
          </Flex>
        </Flex>
        <Flex flexDirection={"column"} flex={1}>
          <Flex>
            <Typography m="0" as="h3">
              {data?.title}
              <IconButton
                onClick={() => navigate(`/posts/edit/${id}`)}
                as="a"
                display={"initial"}
                mx="6px"
              >
                <MdEditNote />
              </IconButton>
            </Typography>
          </Flex>
          <Spacing my="1rem" />

          <Typography my={"2px"} as="h6" fontSize={"14px"}>
            Body
          </Typography>
          <Typography m="0" as="p">
            {data?.body}
          </Typography>
        </Flex>
      </Flex>
    </>
  );
};

export default Post;
