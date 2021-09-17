import { Box, Flex } from "@chakra-ui/layout";
import Header from "@components/ui/Header";
import Image from "next/image";

import heroImage from "@images/hero.png";

export default function Hero() {
  return (
    <Flex position="relative" minH="100vh" direction="column">
      <Box zIndex={-1}>
        <Image
          src={heroImage}
          alt=""
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          placeholder="blur"
        />
      </Box>
      <Header />
    </Flex>
  );
}
