import { Grid } from "@chakra-ui/layout";
import Link from "next/link";
import { translations } from "./constants";

// Used for i18n, cancelled by errors with storybook
// import { useRouter } from "next/router";
// const { asPath } = useRouter();
export default function LanguageSwitcher() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} fontSize="14px" pt="3px">
      {translations.map((translation, key) => (
        <Link key={key} href={translation.locale} locale={translation.locale}>
          {translation.label}
        </Link>
      ))}
    </Grid>
  );
}
