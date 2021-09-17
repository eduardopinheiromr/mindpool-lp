import Link from "next/link";
import { useRouter } from "next/router";
import { useDisclosure } from "@chakra-ui/hooks";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import { MenuToggle } from "./MenuToggle";

import { navigationContent } from "src/i18n/shared/navigation";
import { navigation } from "./constants";
import LanguageSwitcher from "./LanguageSwitcher";
import { Box, Stack } from "@chakra-ui/react";

export default function MobileMenu() {
  const { locale } = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box mr="3rem" d={["block", "block", "none"]}>
        <LanguageSwitcher />
      </Box>

      <MenuToggle toggle={onOpen} isOpen={isOpen} />

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px" bg="black" color="white">
            Menu
          </DrawerHeader>
          <DrawerBody bg="black" color="white">
            <Stack>
              {navigation.map((nav, key) => (
                <div key={key} onClick={onClose}>
                  <Link href={nav.link}>
                    {navigationContent[locale][key].label}
                  </Link>
                </div>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
