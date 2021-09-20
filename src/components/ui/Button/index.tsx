import { Box, BoxProps } from "@chakra-ui/layout";

export type ButtonProps = {
  danger?: boolean;
  children: string;
  onClick?: () => void;
} & BoxProps;

export default function Button(props: ButtonProps) {
  return (
    <Box
      {...props}
      as={props.as ?? "button"}
      h={props.h ?? "49px"}
      minW="131px"
      p="10px 18px"
      bg="linear-gradient(135deg, #00FFBF 0%, #31D8B3 33.33%, #1C987D 100%)"
      borderRadius={50}
      color="white"
      fontWeight="bold"
      transition=".5s"
      shadow="0px 10px 20px rgba(0, 0, 0, 0.1)"
      _hover={{
        filter: props.danger ? "invert(1)" : "brightness(1.3)",
        color: "#084437",
        shadow: "0 0 10px #00FFBF",
      }}
      _focus={{
        filter: props.danger ? "invert(1)" : "brightness(1.3)",
        color: "#084437",
        shadow: "0 0 10px #00FFBF",
      }}
      _active={{
        filter: props.danger ? "invert(1) brightness(0.3)" : "brightness(0.3)",
        color: "white",
      }}
    >
      {props.children}
    </Box>
  );
}
