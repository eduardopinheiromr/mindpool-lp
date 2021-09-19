import { GetStaticProps } from "next";

import PageLayout from "@components/layouts/PageLayout";
import About from "@components/sections/About";
import Hero from "@components/sections/Hero";
import Posts from "@components/sections/Posts";

import { getPostsWithLikes } from "@services";

type Props = {
  posts: TPostWithLikes[];
};

export default function Home({ posts }: Props) {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Posts posts={posts} />
    </PageLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPostsWithLikes(3);

  return {
    props: {
      posts,
    },
  };
};
