import Link from "next/link";
import { Box, Grid } from "@chakra-ui/layout";

import { translations } from "./constants";

// Used for i18n, cancelled by errors with storybook
// import { useRouter } from "next/router";
// const { asPath } = useRouter();
export default function LanguageSwitcher() {
  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={2} fontSize="14px" pt="3px">
      {translations.map((translation, key) => (
        <Link
          key={key}
          href={translation.locale}
          locale={translation.locale}
          passHref
        >
          <Box
            as="a"
            borderY={key === 0 ? "1px solid gray" : "1px solid transparent"} // Here must be locale validation with i18n
            transition=".3s"
            _hover={{
              filter: "brightness(1.5)",
              borderY: "1px solid gray",
            }}
          >
            {translation.label}
          </Box>
        </Link>
      ))}
    </Grid>
  );
}
