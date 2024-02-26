import { useParams } from "react-router-dom";
import { useTheme } from "styled-components";
import { useGetPost } from "../../store/hooks/useGetPosts";
import PageHeader from "@src/lib/layout/PageHeader/PageHeader";
import { Flex } from "@src/lib/layout/Flex/Flex";
import Form from "./components/Form";

const EditPost = () => {
  const { colors } = useTheme();
  const { id } = useParams();
  const { data, isLoading } = useGetPost(id);

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <PageHeader title="Edit Post" breadcrumb={[{ title: "Edit Post" }]} />
      <Flex
        backgroundColor={colors.white.main}
        width="100%"
        px="1.5rem"
        py="1.5rem"
        flexDirection={{ sm: "column", md: "row" }}
        gridGap={{ sm: "1rem", md: "0" }}
        flex={1}
      >
        <Flex flex={1}>
          <Flex width="100%" justifyContent={"center"}>
            <img src="https://picsum.photos/400/300" />
          </Flex>
        </Flex>
        {data && <Form post={data} />}
      </Flex>
    </>
  );
};

export default EditPost;
