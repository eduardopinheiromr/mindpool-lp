import React from "react";
import { Meta, Story } from "@storybook/react";
import Header from ".";

export default {
  title: "UI/Header",
  component: Header,
} as Meta;

export const header: Story = (args) => <Header {...args} />;
