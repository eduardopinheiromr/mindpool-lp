import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Header from "@components/ui/Header";
import Image from "next/image";

import heroImage from "@images/hero.png";
import Container from "@components/layouts/Container";
import Button from "@components/ui/Button";

export default function Hero() {
  return (
    <Box position="relative" w="full" minH="900px">
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
      <Container>
        <Box maxWidth="590px" mt="160px">
          <Heading as="h3" color="secondary" fontSize="24px">
            Make your employees voice heard
          </Heading>
          <Heading as="h1" color="white" fontSize="56px">
            Are you ready to know what your employees think?
          </Heading>

          <Flex style={{ gap: 20 }} my="33px">
            <Button>Yes</Button>
            <Button>No</Button>
          </Flex>

          <Text color="white" fontSize="18">
            Employees can have awesome insights about your company, that not
            even some specialist know. Why not gather that knowledge?
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
