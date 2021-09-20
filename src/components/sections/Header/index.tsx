import Link from "next/link";
import Image from "next/image";
import { Box, Flex } from "@chakra-ui/layout";
import { Container, LazyMotionBox } from "@components/layouts";
import { Button } from "@components/ui";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";

import logoImage from "@images/logo.svg";
import { navigationContent } from "@i18n/shared/navigation";
import { navigation } from "./constants";

export default function Header() {
  return (
    <LazyMotionBox
      transition={{ duration: 1.2 }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <Box
        as="header"
        color="#fff"
        bgGradient="linear(to-b, black, transparent)"
        position="absolute"
        w="full"
        zIndex="10"
      >
        <Container
          as="nav"
          d="flex"
          flexDirection={["column", "column", "row"]}
          alignItems="center"
        >
          <Flex
            w={["full", "full", "160px"]}
            mr="20px"
            align="center"
            justify="space-between"
          >
            <Link href="/" passHref>
              <Box as="a" mt="10px">
                <Image src={logoImage} alt="Mindpool Logo" />
              </Box>
            </Link>
            <MobileMenu />
          </Flex>

          <Flex
            d={["none", "none", "flex"]}
            w="full"
            style={{ gap: 20 }}
            align="center"
          >
            {navigation.map((nav, key) => (
              <Link key={key} href={nav.link} passHref>
                <Box
                  as="a"
                  whiteSpace="nowrap"
                  fontWeight="bold"
                  transition=".3s"
                  _hover={{ color: "secondary" }}
                >
                  {navigationContent["en"][key].label}
                </Box>
              </Link>
            ))}
            <Flex w="full" justify="flex-end" align="center">
              <LanguageSwitcher />
              <Flex
                ml="20px"
                borderLeft="1px solid white"
                p="0 20px"
                fontWeight="bold"
                whiteSpace="nowrap"
                h="56px"
                align="center"
              >
                Log in
              </Flex>
              <Button h="59px">Join now</Button>
            </Flex>
          </Flex>
        </Container>
      </Box>
    </LazyMotionBox>
  );
}
