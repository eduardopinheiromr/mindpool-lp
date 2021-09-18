import { Box } from "@chakra-ui/layout";
import Header from "@components/ui/Header";
import Image from "next/image";

import heroImage from "@images/hero.png";

export default function Hero() {
  return (
    <Box position="relative" w="full">
      <Box zIndex={-1} position="absolute" w="full" minH="900px">
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
    </Box>
  );
}
