import { GetStaticProps } from "next";

import PageLayout from "@components/layouts/PageLayout";
import About from "@components/sections/About";
import Hero from "@components/sections/Hero";
import Posts from "@components/sections/Posts";
import YourOpinion from "@components/sections/YourOpinion";

import { getPostsWithLikes } from "@services";
import PageTags from "@components/PageTags";

type Props = {
  posts: TPostWithLikes[];
};

const pageTagsProps = {
  title: "Mindpool | Smarter together",
  description:
    "Championing the transition to a collective intelligence mindset. Mindpool is a business intelligence platform that crowdsources employee predictions and actions that you can take to improve your companies future.",
};

export default function Home({ posts }: Props) {
  return (
    <PageLayout>
      <PageTags {...pageTagsProps} />
      <Hero />
      <About />
      <Posts posts={posts} />
      <YourOpinion />
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
