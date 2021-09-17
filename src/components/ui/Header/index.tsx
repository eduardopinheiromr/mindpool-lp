import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Flex } from "@chakra-ui/layout";

import { navigationContent } from "src/i18n/shared/navigation";
import { navigation } from "./constants";

import logoImage from "@images/logo.svg";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

export type HeaderProps = {
  // title: string;
};

export default function Header() {
  const { locale } = useRouter();

  return (
    <Box as="header" color="#fff">
      <Box
        as="nav"
        width="100%"
        maxWidth="1000px"
        margin="0 auto"
        padding="15px"
        d="flex"
        flexDirection={["column", "column", "row"]}
        alignItems="center"
      >
        <Flex align="center" w="full">
          <Box p="10px 10px 0px" mr="auto">
            <Image src={logoImage} alt="" />
          </Box>
          <MobileMenu />
        </Flex>
        <Flex
          direction={["column", "column", "row"]}
          align="center"
          justify={["center", "center", "space-between"]}
          w="100%"
          d={["none", "none", "flex"]}
        >
          <Flex style={{ gap: 20 }} align="center">
            {navigation.map((nav, key) => (
              <Link key={key} href={nav.link}>
                {navigationContent[locale][key].label}
              </Link>
            ))}
          </Flex>
          <LanguageSwitcher />
        </Flex>
      </Box>
    </Box>
  );
}
