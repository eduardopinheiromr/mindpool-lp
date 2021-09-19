type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

type TPostWithLikes = { likes: number } & TPost;

type TGetPostResponse = {
  data: TPost[];
};

type TGetPostCommentsResponse = {
  data: TComment[];
};
