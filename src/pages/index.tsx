import Header from "@components/Header";

export default function Home() {
  return (
    <div>
      <Header title="Teste" />
      <h1>Simple Storybook Example</h1>
    </div>
  );
}

export const getStaticProps = async (context) => {
  return {
    props: { context },
  };
};
