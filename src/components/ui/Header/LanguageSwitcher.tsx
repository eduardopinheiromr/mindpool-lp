import { Grid } from "@chakra-ui/layout";
import Link from "next/link";
import { useRouter } from "next/router";
import { translations } from "./constants";

export default function LanguageSwitcher() {
  const { asPath } = useRouter();

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      {translations.map((translation, key) => (
        <Link key={key} href={asPath} locale={translation.locale}>
          {translation.label}
        </Link>
      ))}
    </Grid>
  );
}
