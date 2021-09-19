import { Box, Flex, Text } from "@chakra-ui/layout";
import { capitalize } from "@utils";
import { FcLikePlaceholder as LikeIcon } from "react-icons/fc";

export const FirstPost = ({ post }) => (
  <Box>
    <Flex style={{ gap: 5 }} color="gray">
      <LikeIcon color="#D1D5DA" fill="#D1D5DA" /> {post.likes}
    </Flex>
    <Text color="primary" fontWeight="bold">
      {capitalize(post.title)}
    </Text>
  </Box>
);
