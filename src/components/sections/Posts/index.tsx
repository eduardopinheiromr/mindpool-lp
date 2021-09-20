import { Box, Flex, Heading } from "@chakra-ui/layout";
import { AnimateOnScreen, Container, LazyMotionBox } from "@components/layouts";
import { FirstPost, SecondPost, ThirdPost } from "./HomePosts";

export type PostsProps = {
  posts: TPostWithLikes[];
};

export default function Posts({ posts }: PostsProps) {
  return (
    <Box bg="light" p="53px 0 58px" id="posts" overflowX="hidden">
      <Container>
        <Heading
          as="h5"
          color="gray"
          fontSize="16px"
          textAlign="center"
          mb="30px"
        >
          BLOG POSTS
        </Heading>
        <Flex
          style={{ gap: 30 }}
          minH={["660px"]}
          direction={["column", "column", "column", "row"]}
        >
          <FirstPost key={posts[0].id} post={posts[0]} />
          <Flex style={{ gap: 30 }} direction="column" h="full">
            <SecondPost key={posts[1].id} post={posts[1]} />
            <ThirdPost key={posts[2].id} post={posts[2]} />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
