import { Box, Heading } from "@chakra-ui/layout";
import Container from "@components/layouts/Container";
import React from "react";

export default function Posts() {
  return (
    <Box bg="light">
      <Container>
        <Heading
          as="h5"
          color="gray"
          fontSize="16px"
          textAlign="center"
          m="53px 0 30px"
        >
          BLOG POSTS
        </Heading>
      </Container>
    </Box>
  );
}
