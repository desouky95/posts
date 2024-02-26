import {
  useAppDispatch,
  useAppSelector,
} from "@src/core/store/hooks/store.hooks";
import { useCallback, useEffect } from "react";

export const useGetPosts = () => {
  const dispatch = useAppDispatch();

  const { isLoading, data } = useAppSelector((s) => s.posts);

  useEffect(() => {
    dispatch({ type: "POSTS_FETCH" });
  }, []);

  if (isLoading) return { data: undefined, isLoading };

  return { data, isLoading };
};

export const useGetPost = (id?: string) => {
  const dispatch = useAppDispatch();

  const { isLoading, selected } = useAppSelector((s) => s.posts);

  useEffect(() => {
    if (!id) return;
    dispatch({ type: "POST_FETCH", id });
  }, [id]);

  if (isLoading) return { data: undefined, isLoading };

  return { data: selected, isLoading };
};

export const useUpdatePost = () => {
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((s) => s.posts);
  const mutate = useCallback((data: Partial<Post> & { id: number }) => {
    dispatch({
      type: "POST_UPDATE",
      data: data,
    });
  }, []);

  return { isLoading, mutate };
};

export const useDeletePost = () => {
  const dispatch = useAppDispatch();

  const { isLoading } = useAppSelector((s) => s.posts);
  const mutate = useCallback((id: string | number) => {
    dispatch({
      type: "POST_DELETE",
      id,
    });
  }, []);

  return { isLoading, mutate };
};
