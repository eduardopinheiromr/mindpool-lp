import { AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useOnScreen } from "@hooks/useOnScreen";
import { Box } from "@chakra-ui/layout";

export default function AnimateOnScreen({ children }) {
  const componentRef = useRef(null);
  const isVisible = useOnScreen(componentRef, "-100px");
  console.log({ isVisible });
  return (
    <Box w="full" h="full" ref={componentRef}>
      <AnimatePresence>{isVisible && children}</AnimatePresence>
    </Box>
  );
}