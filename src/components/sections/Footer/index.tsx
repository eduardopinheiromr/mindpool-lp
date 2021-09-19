import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Container } from "@components/layouts";
import { Button } from "@components/ui";

import logoImage from "@images/logo-footer.svg";

export default function Footer() {
  const termsAndPolicies = [
    { label: "Terms & Conditions", link: "/terms-and-conditions" },
    { label: "Privacy Policy", link: "/privacy-policy" },
  ];
  return (
    <Box as="footer" bg="black" id="newsletter">
      <Container
        d="flex"
        flexDirection={["column", "row"]}
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="#" passHref>
          <Box as="a" pt={["50px", "0"]}>
            <Image draggable={false} src={logoImage} alt="Mindpool logo" />
          </Box>
        </Link>
        <Flex
          direction="column"
          minH="400px"
          w={["300px", "320px"]}
          justify="space-between"
          pt={["50px", "100px"]}
        >
          <Flex direction="column" style={{ gap: 10 }}>
            <Text color="gray" fontSize="14px" fontWeight="bold">
              SIGN UP FOR OUR NEWSLETTER
            </Text>
            <Input
              borderRadius="0"
              borderColor="gray"
              fontSize="14px"
              fontWeight="bold"
              placeholder="Name"
              size="lg"
            />
            <Input
              borderRadius="0"
              borderColor="gray"
              fontSize="14px"
              fontWeight="bold"
              placeholder="Email"
              size="lg"
            />
            <Button>Subscribe</Button>
          </Flex>
          <Flex style={{ gap: 20 }} justify="flex-end">
            {termsAndPolicies.map((page, key) => (
              <Link href={page.link} passHref key={key}>
                <Text
                  _hover={{ filter: "brightness(1.5)" }}
                  as="a"
                  fontWeight="bold"
                  fontSize="12px"
                  color="gray"
                  transition=".3s"
                >
                  {page.label}
                </Text>
              </Link>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
