import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Container from "@components/layouts/Container";
import Button from "@components/ui/Button";
import Link from "next/link";
import Image from "next/image";

import earthImage from "@images/countries.png";
import { MotionBox } from "@components/layouts/MotionBox";
import AnimateOnScreen from "@components/layouts/AnimateOnScreen";

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
        <AnimateOnScreen>
          <MotionBox
            position="relative"
            mt={["40px", "40px", "0"]}
            minH="280px"
            w="full"
            transition={{
              duration: 0.2,
              repeat: 2,
              repeatType: "loop",
            }}
            animate={{
              opacity: ["0", "1"],
              filter: ["brightness(1)", "brightness(.5)", "brightness(1)"],
            }}
          >
            <Image
              draggable={false}
              src={earthImage}
              alt=""
              layout="responsive"
            />
          </MotionBox>
        </AnimateOnScreen>
      </Flex>
    </Container>
  );
}
