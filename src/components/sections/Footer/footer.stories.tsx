import React from "react";
import { Meta, Story } from "@storybook/react";
import Footer from ".";

export default {
  title: "Sections/Footer",
  component: Footer,
} as Meta;

export const footer: Story = (args) => <Footer {...args} />;
