import { Box, Flex, Heading, Text } from "@chakra-ui/layout";
import Container from "@components/layouts/Container";

import { FirstPost } from "./FirstPost";
import { SecondPost } from "./SecondPost";
import { ThirdPost } from "./ThirdPost";

type Props = {
  posts: TPostWithLikes[];
};

export default function Posts({ posts }: Props) {
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
        <FirstPost key={posts[0].id} post={posts[0]} />
        <SecondPost key={posts[1].id} post={posts[1]} />
        <ThirdPost key={posts[2].id} post={posts[2]} />
      </Container>
    </Box>
  );
}
