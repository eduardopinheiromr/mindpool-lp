import PageLayout from "@components/layouts/PageLayout";
import About from "@components/sections/About";
import Hero from "@components/sections/Hero";
import Posts from "@components/sections/Posts";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
      <Posts />
    </PageLayout>
  );
}
