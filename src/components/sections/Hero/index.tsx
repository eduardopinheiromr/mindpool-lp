import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Container } from "@components/layouts";
import { Button } from "@components/ui";

import heroImage from "@images/hero.png";

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
          draggable={false}
        />
      </Box>
      <Container>
        <Box
          maxWidth="590px"
          mt="160px"
          mx={["auto", "auto", "0"]}
          textAlign={["center", "center", "left"]}
        >
          <Heading as="h3" color="secondary" fontSize="24px">
            Make your employees voice heard
          </Heading>
          <Heading as="h1" color="white" fontSize={["36px", "42px", "56px"]}>
            Are you ready to know what your employees think?
          </Heading>

          <Flex
            style={{ gap: 20 }}
            my="33px"
            justify={["center", "center", "flex-start"]}
          >
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
