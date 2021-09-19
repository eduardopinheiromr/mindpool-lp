import { Box } from "@chakra-ui/react";

import { HiOutlineMenuAlt3 as MenuIcon } from "react-icons/hi";
import { IoMdClose as CloseIcon } from "react-icons/io";

type MenuToggleProps = {
  toggle: () => void;
  isOpen: boolean;
};

export default function MenuToggle({ toggle, isOpen }: MenuToggleProps) {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <CloseIcon size={30} /> : <MenuIcon size={30} />}
    </Box>
  );
}
