import { Box } from "@chakra-ui/layout";
import { ReactNode } from "react";

export type ContainerProps = {
  children: ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    <Box width="100%" maxWidth="1000px" margin="0 auto" padding="15px">
      {children}
    </Box>
  );
}
