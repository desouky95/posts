import { Button } from "@src/lib/components/Button/Button";
import { Input } from "@src/lib/components/Input/Input";
import { TextArea } from "@src/lib/components/TextArea/TextArea";
import { Flex } from "@src/lib/layout/Flex/Flex";
import { Spacing } from "@src/lib/utils/Spacing/Spacing";
import { Typography } from "@src/lib/utils/Typography/Typography";
import { useUpdatePost } from "@src/pages/posts/store/hooks/useGetPosts";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type Props = {
  post: Post;
};
const Form = ({ post }: Props) => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      title: post.title,
      body: post.body,
    },
  });

  const navigate = useNavigate();
  const { mutate } = useUpdatePost();

  const handleClick = handleSubmit((values) => {
    mutate({ body: values.body, title: values.title, id: post.id });
    navigate(`/posts/${post.id}`);
  });

  return (
    <Flex flexDirection={"column"} flex={1} alignItems={"flex-end"}>
      <Typography my={"2px"} as="h6" fontSize={"14px"}>
        Title
      </Typography>
      <Controller
        control={control}
        name={"title"}
        render={({ field }) => <Input width={"100%"} {...field} />}
      />
      <Spacing my="1rem" />

      <Typography my={"2px"} as="h6" fontSize={"14px"}>
        Body
      </Typography>
      <Controller
        control={control}
        name={"body"}
        render={({ field }) => (
          <TextArea minHeight={"200px"} width={"100%"} {...field} />
        )}
      />
      <Spacing my="1rem" />

      <Button onClick={handleClick} variant="pink">
        Save
      </Button>
    </Flex>
  );
};

export default Form;
