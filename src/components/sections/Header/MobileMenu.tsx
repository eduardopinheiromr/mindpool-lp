import Link from "next/link";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { Grid, Box } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";
import { Button } from "@components/ui";
import LanguageSwitcher from "./LanguageSwitcher";
import MenuToggle from "./MenuToggle";

import { navigationContent } from "@i18n/shared/navigation";
import { navigation } from "./constants";

// Used for i18n, cancelled by errors with storybook
// import { useRouter } from "next/router";
// const { locale } = useRouter();
export default function MobileMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MenuToggle toggle={onOpen} isOpen={isOpen} />

      <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent fontWeight="bold" textAlign="center">
          <DrawerHeader borderBottomWidth="1px" bg="black" color="white">
            Menu
          </DrawerHeader>
          <DrawerBody bg="black" color="white" p="30px">
            <Grid gap={6}>
              <Link href="/login" passHref>
                <Box as="a">Log in</Box>
              </Link>
              {navigation.map((nav, key) => (
                <div key={key} onClick={onClose}>
                  <Link href={nav.link}>
                    {navigationContent["en"][key].label}
                  </Link>
                </div>
              ))}
              <Box>
                <LanguageSwitcher />
              </Box>

              <Button>Join now</Button>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
