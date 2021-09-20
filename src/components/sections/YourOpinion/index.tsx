import { Box, Flex, Heading } from "@chakra-ui/layout";
import { Container } from "@components/layouts";
import { Button } from "@components/ui";

export default function YourOpinion() {
  return (
    <Box p="20px 0 20px" id="your-opinion">
      <Container>
        <Box maxW="720px" mx="auto" textAlign="center">
          <Heading
            as="h5"
            color="gray"
            fontSize="16px"
            textAlign="center"
            mb="30px"
          >
            TAKE ACTION NOW
          </Heading>
          <Heading as="h3" fontSize={["28px", "32px", "36px"]}>
            Do you think employess can change the way your board thinks?
          </Heading>

          <Flex style={{ gap: 20 }} justify="center" align="center" my="20px">
            <Button>Yes</Button>
            <Button danger>No</Button>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
