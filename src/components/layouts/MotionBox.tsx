// import { Box, BoxProps } from "@chakra-ui/layout";
// import { motion } from "framer-motion";

// export const MotionBox = motion<BoxProps>(Box);

import { chakra, HTMLChakraProps } from "@chakra-ui/react";
import { HTMLMotionProps, motion } from "framer-motion";
import * as React from "react";

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;

export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div);
