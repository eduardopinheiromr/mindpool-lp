import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { NextIntlProvider } from "next-intl";

import theme from "@config/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlProvider
      messages={pageProps.messages}
      now={new Date(pageProps.now)}
    >
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </NextIntlProvider>
  );
}

export default MyApp;
