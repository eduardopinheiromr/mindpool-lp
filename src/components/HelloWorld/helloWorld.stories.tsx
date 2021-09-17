import React from "react";
import { Meta } from "@storybook/react";
import HelloWorld from "./";

export default { title: "Hello World" } as Meta;

export const simpleComponent = () => <HelloWorld />;
