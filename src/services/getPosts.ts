import { api } from ".";

export const getPosts = async () => {
  const { data }: TGetPostResponse = await api.get("/posts");

  return data;
};
