import { Button } from "@src/lib/components/Button/Button";
import { Dialog } from "@src/lib/components/Dialog/Dialog";
import { Box } from "@src/lib/layout/Box/Box";
import { Flex } from "@src/lib/layout/Flex/Flex";
import { Typography } from "@src/lib/utils/Typography/Typography";
import { useDeletePost } from "@src/pages/posts/store/hooks/useGetPosts";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Dialog> & { id?: string };
export const DeleteDialog = ({ children, id, ...props }: Props) => {
  const { mutate, isLoading } = useDeletePost();
  return (
    <Dialog {...props}>
      <Flex
        flexDir={"column"}
        minW={{ sm: "90%", md: "20vw" }}
        padding="1rem"
        alignItems={"flex-end"}
      >
        <Box w="100%">
          <Typography width={"100%"} as="h4">
            Are you sure to delete post ?
          </Typography>
        </Box>
        <Button
          onClick={() => {
            if (!id) return;
            mutate(id);
            props.onClose?.();
          }}
          variant="pink"
        >
          Delete
        </Button>
      </Flex>
    </Dialog>
  );
};
