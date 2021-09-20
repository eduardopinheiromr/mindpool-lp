import Image from "next/image";
import { Box, Flex, Text } from "@chakra-ui/layout";

import { capitalize, getPostImageSrc } from "@utils";
import { FcLikePlaceholder as LikeIcon } from "react-icons/fc";
import { BsArrowRight as ReadMoreIcon } from "react-icons/bs";
import { AnimateOnScreen, LazyMotionBox } from "@components/layouts";

export const FirstPost = ({ post }) => {
  const imageSrc = getPostImageSrc(post.id, 472, 900);
  return (
    <AnimateOnScreen>
      <LazyMotionBox
        transition={{
          duration: 1,
          repeatType: "loop",
        }}
        initial={{ opacity: 0, x: -100 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <Box>
          <Box position="relative" w="full" h={["300", "300", "300", "472"]}>
            <Image
              src={imageSrc}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </Box>
          <Box bg="white" p="16px 45px 0">
            <Flex style={{ gap: 5 }} color="gray">
              <LikeIcon /> {post.likes}
            </Flex>
            <Text
              color="secondary"
              fontWeight="bold"
              fontSize={["20px", "24px", "30px"]}
            >
              {capitalize(post.title.slice(0, 40))}...
            </Text>{" "}
            <Text
              color="gray"
              fontWeight="bold"
              fontSize={["16px", "18px", "24px"]}
            >
              {capitalize(post.body.slice(0, 100))}...
            </Text>
            <Box color="secondary" fontSize="25px" py="15px">
              <ReadMoreIcon title="Read more" />
            </Box>
          </Box>
        </Box>{" "}
      </LazyMotionBox>
    </AnimateOnScreen>
  );
};

export const SecondPost = ({ post }) => {
  const imageSrc = getPostImageSrc(post.id, 221, 239);
  return (
    <AnimateOnScreen>
      <LazyMotionBox
        transition={{
          duration: 1,
          repeatType: "loop",
        }}
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
        }}
      >
        <Flex>
          <Flex
            direction="column"
            justify="space-between"
            w="50%"
            bg="white"
            p="25px"
          >
            <Box>
              <Flex style={{ gap: 5 }} color="gray">
                <LikeIcon /> {post.likes}
              </Flex>
              <Text color="secondary" fontWeight="bold">
                {capitalize(post.title)}
              </Text>
            </Box>
            <Box color="secondary" fontSize="25px" mt="20px">
              <ReadMoreIcon title="Read more" />
            </Box>
          </Flex>
          <Box position="relative" w="50%" h={["300", "300", "221"]}>
            <Image
              src={imageSrc}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </Box>
        </Flex>
      </LazyMotionBox>
    </AnimateOnScreen>
  );
};

export const ThirdPost = ({ post }) => {
  const imageSrc = getPostImageSrc(post.id, 221, 438);
  return (
    <AnimateOnScreen>
      <LazyMotionBox
        transition={{
          duration: 1,
          repeatType: "loop",
        }}
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
        }}
      >
        <Box>
          <Box position="relative" w="full" h={["300", "300", "221"]}>
            <Image
              src={imageSrc}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              draggable={false}
            />
          </Box>
          <Flex
            justify="space-between"
            direction="column"
            bg="white"
            p="25px"
            h={["221", "221", "215px"]}
          >
            <Box>
              <Flex style={{ gap: 5 }} color="gray">
                <LikeIcon /> {post.likes}
              </Flex>
              <Text color="secondary" fontWeight="bold">
                {capitalize(post.title.slice(0, 40))}
              </Text>
            </Box>
            <Box color="secondary" fontSize="25px" mt="20px">
              <ReadMoreIcon title="Read more" />
            </Box>
          </Flex>
        </Box>
      </LazyMotionBox>
    </AnimateOnScreen>
  );
};
