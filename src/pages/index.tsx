import Header from "@components/Header";
import HelloWorld from "../components/HelloWorld";

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Simple Storybook Example</h1>
      <HelloWorld />
    </div>
  );
}

export function getStaticProps({ locale }) {
  return {
    props: {
      messages: {
        ...require(`../i18n/shared/${locale}.json`),
        ...require(`../i18n/index/${locale}.json`),
      },
    },
  };
}
