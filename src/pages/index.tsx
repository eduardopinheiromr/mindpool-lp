import Hero from "@components/sections/Hero";
import Header from "@components/ui/Header";

export default function Home() {
  return (
    <div>
      <Hero />
    </div>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: { context },
  };
};
