import Link from "next/link";
import Image from "next/image";
import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import { Container, LazyMotionBox } from "@components/layouts";
import { Button, Selector } from "@components/ui";

import earthImage from "@images/countries.png";
import { countries } from "./constants";

export default function About() {
  return (
    <Container>
      <Flex
        as="section"
        py="82px"
        id="about"
        direction={["column", "column", "row"]}
        justify="center"
        align="center"
      >
        <Flex
          direction="column"
          maxWidth="455px"
          textAlign={["center", "center", "left"]}
        >
          <Heading as="h5" color="gray" fontSize="16px">
            MINDPOOL CAN REACH ANY PART OF THE WORLD
          </Heading>

          <Heading as="h3" color="black" fontSize="36px" margin="28px 0 16px">
            Let your employees voice impact your company. They have important
            knowledge.
          </Heading>

          <Text color="black" fontSize="20px">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book.
          </Text>

          <Button my="20px" mx={["auto", "auto", "0"]} w="fit-content">
            Make your voice heard
          </Button>

          <Link href="https://www.mindpool.com/about" passHref>
            <Box
              as="a"
              rel="noreferrer"
              color="primary"
              transition=".3s"
              _hover={{
                color: "secondary",
                textShadow: "0px 0px 10px light",
              }}
            >
              Or read more about Mindpool
            </Box>
          </Link>
        </Flex>

        <Flex direction="column" w="full" h="full">
          <Box
            w={["300px", "340px", "370px"]}
            boxShadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
            borderRadius="5px"
            m={["20px auto 0px", "20px auto 0", "0 auto 53px"]}
            fontSize={["12px", "15px", "15px"]}
          >
            <Selector
              placeholder="Select where you are located at"
              options={countries}
            />
          </Box>

          <LazyMotionBox
            position="relative"
            mt={["40px", "40px", "0"]}
            minH="280px"
            w="full"
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "loop",
            }}
            animate={{
              filter: ["brightness(1.2)", "brightness(0.9)", "brightness(1.2)"],
            }}
          >
            <Image
              draggable={false}
              placeholder="blur"
              src={earthImage}
              alt="World map"
              layout="responsive"
            />
          </LazyMotionBox>
        </Flex>
      </Flex>
    </Container>
  );
}
