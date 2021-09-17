import Link from "next/link";
import { useRouter } from "next/router";
import { navigationContent } from "src/i18n/shared/navigation";

export type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const { locale, asPath } = useRouter();

  const navigation = [
    { link: "#about" },
    { link: "#posts" },
    { link: "#your-opinion" },
    { link: "#newsletter" },
  ];

  const translations = [
    { label: "EN", locale: "en" },
    { label: "FR", locale: "fr" },
    { label: "ES", locale: "es" },
  ];

  return (
    <header style={{ display: "flex", justifyContent: "space-between" }}>
      <h1>{title}</h1>
      <nav>
        {navigation.map((nav, key) => (
          <Link key={key} href={nav.link}>
            {navigationContent[locale][key].label}
          </Link>
        ))}
      </nav>
      <nav>
        {translations.map((translation, key) => (
          <Link key={key} href={asPath} locale={translation.locale}>
            {translation.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
