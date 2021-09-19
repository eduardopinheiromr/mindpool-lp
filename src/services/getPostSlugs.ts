import { api } from ".";
import slugify from "slugify";

export const getPostSlugs = async () => {
  const { data }: TGetPostResponse = await api.get("/posts");

  const slugs = data.map((post) => slugify(post.title));

  return slugs;
};
