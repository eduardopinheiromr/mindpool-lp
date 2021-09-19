import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
  image?: string;
};

const PageTags = ({ title, description, image }: Props) => {
  const router = useRouter();
  const url = process.env.NEXT_PUBLIC_CANONICAL_URL;

  return (
    <Head>
      <title>{title}</title>
      <meta name="robots" content="follow, index" />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        name="author"
        content="Eduardo Pinheiro - https://edupinheiro.dev/"
      />
      <meta property="og:url" content={url + router.asPath} />
      <meta
        property="og:image"
        content={image ? image : url + "/android-chrome-512x512.png"}
      />
      <meta property="og:site_name" content={title} />
      <link rel="canonical" href={url + router.asPath} />
    </Head>
  );
};

export default PageTags;
