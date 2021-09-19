import React from "react";
import { Meta, Story } from "@storybook/react";
import About from ".";

export default {
  title: "Sections/About",
  component: About,
} as Meta;

export const about: Story = (args) => <About {...args} />;
