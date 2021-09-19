import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from ".";

export default {
  title: "Sections/Header",
  component: Header,
} as Meta;

export const header: Story = (args) => <Header {...args} />;
