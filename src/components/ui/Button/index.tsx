import { Button as ChakraButton } from "@chakra-ui/react";

export type ButtonProps = {
  label: string;
};

export default function Button({ label }: ButtonProps) {
  return <ChakraButton>{label}</ChakraButton>;
}
