import { api } from ".";
import { getPostComments } from "./getPostComments";

export const getPostsWithLikes = async (quantity: number) => {
  const { data }: TGetPostResponse = await api.get("/posts");

  const wantedPosts = data.slice(0, quantity);

  const postComments = await Promise.all(
    wantedPosts.map((post) => getPostComments(post.id))
  );

  const postsWithLikes = wantedPosts.map((post, index) => {
    const comments = postComments[index];

    return {
      ...post,
      likes: comments.length,
    };
  });

  return postsWithLikes;
};
