import { Button } from "@src/lib/components/Button/Button";
import { IconButton } from "@src/lib/components/IconButton/IconButton";
import { Box } from "@src/lib/layout/Box/Box";
import { Flex } from "@src/lib/layout/Flex/Flex";
import PageHeader from "@src/lib/layout/PageHeader/PageHeader";
import { Spacing } from "@src/lib/utils/Spacing/Spacing";
import { colors } from "@src/styles/theme/colors/colors";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { PostsTable } from "./components/PostsTable/PostsTable";
import { useGetPosts } from "../../store/hooks/useGetPosts";
const Posts = () => {
  const { data, isLoading } = useGetPosts();

  if (isLoading) return <p>Loading ...</p>;

  return (
    <>
      <PageHeader
        title="Posts"
        breadcrumb={[{ title: "Posts", path: "/posts" }]}
      />
      <Box
        backgroundColor={colors.white.main}
        width="100%"
        px="1.5rem"
        py="1.5rem"
      >
        <Flex
          width="100%"
          alignItems="center"
          justifyContent={"space-between"}
          flexWrap="wrap"
          gridGap="2rem"
        >
          <Flex>
            <Button startIcon={<AiFillPlusCircle />} variant="pink">
              Add Post
            </Button>
          </Flex>
          <Flex gap="1rem">
            <IconButton size="sm" variant="green" minW={'45px'}>
              <IoMdSettings />
            </IconButton>
            <Button>Import</Button>
            <Button>Export</Button>
          </Flex>
        </Flex>
        <Spacing my="2rem" />
        {data && <PostsTable data={data} />}
      </Box>
    </>
  );
};

export default Posts;
