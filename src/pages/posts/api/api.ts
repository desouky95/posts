import api from "@src/core/api/api";
import { AxiosResponse } from "axios";

export const getPosts = async () =>
  api.get<AxiosResponse<Post[]>>("posts").then((res) => res.data);

export const getPost = async (id: string | number) =>
  api.get<AxiosResponse<Post>>(`posts/${id}`).then((res) => res.data);

export const updatePost = async (data: Partial<Post> & { id: number }) =>
  api
    .put<AxiosResponse<Post>>(`posts/${data.id}`, data)
    .then((res) => res.data);

export const deletePost = async (id: number | string) =>
  api.delete<AxiosResponse<Post>>(`posts/${id}`).then((res) => res.data);
