import { Box } from "@chakra-ui/layout";

export type ButtonProps = {
  children: string;
  lg?: boolean;
  onClick?: () => void;
};

export default function Button({ children, lg }: ButtonProps) {
  return (
    <Box
      as="button"
      h={lg ? "59px" : "49px"}
      minW="131px"
      p="10px 18px"
      bg="linear-gradient(135deg, #00FFBF 0%, #31D8B3 33.33%, #1C987D 100%)"
      borderRadius={50}
      color="white"
      fontWeight="bold"
      transition=".5s"
      shadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
      _hover={{
        filter: "brightness(1.3)",
        color: "#084437",
        shadow: "0 0 10px #00FFBF",
      }}
      _active={{
        filter: "brightness(0.3)",
        color: "white",
      }}
    >
      {children}
    </Box>
  );
}
