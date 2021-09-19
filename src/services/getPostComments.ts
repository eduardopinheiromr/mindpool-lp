import { api } from ".";

export const getPostComments = async (id: string | number) => {
  const { data }: TGetPostCommentsResponse = await api.get(
    `/posts/${id}/comments`
  );

  return data;
};
