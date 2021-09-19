import PageLayout from "@components/layouts/PageLayout";
import About from "@components/sections/About";
import Hero from "@components/sections/Hero";

export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <About />
    </PageLayout>
  );
}
