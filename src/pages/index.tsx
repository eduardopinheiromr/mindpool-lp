import PageTags from "@components/PageTags";
import { PageLayout } from "@components/layouts";
import { About, Hero, Posts, YourOpinion } from "@components/sections";

import { getPostsWithLikes } from "@services";

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

export async function getStaticProps() {
  const posts = await getPostsWithLikes(3);

  return {
    props: {
      posts,
    },
  };
}
