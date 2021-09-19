import React from "react";
import { Meta, Story } from "@storybook/react";
import Hero from ".";

export default {
  title: "Sections/Hero",
  component: Hero,
} as Meta;

export const hero: Story = (args) => <Hero {...args} />;
