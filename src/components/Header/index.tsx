import Link from "next/link";
// import { useRouter } from "next/router";

export type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const navigation = [
    { label: "About", link: "#about" },
    { label: "Posts", link: "#posts" },
    { label: "Your Opinion", link: "#your-opinion" },
    { label: "Newsletter", link: "#newsletter" },
  ];
  return (
    <header>
      <h1>{title}</h1>
      {navigation.map((nav, key) => (
        <Link key={key} href={nav.link}>
          {nav.label}
        </Link>
      ))}
      {/* <Link href="/">
        <a>{t("index")}</a>
      </Link>
      <Link href="/about">
        <a>{t("about")}</a>
      </Link>
      <Link href="/" locale="en">
        EN
      </Link>
      <Link href="/" locale="fr">
        FR
      </Link> */}
    </header>
  );
}
