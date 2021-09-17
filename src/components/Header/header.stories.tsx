import React from "react";
import { Meta, Story } from "@storybook/react";
import Header, { HeaderProps } from "./";

export default {
  title: "UI/Header",
  component: Header,
  argTypes: {
    title: {
      control: { type: "text", default: "Teste" },
    },
  },
} as Meta;

export const header: Story<HeaderProps> = (args) => <Header {...args} />;

header.args = {
  title: "Teste",
};
