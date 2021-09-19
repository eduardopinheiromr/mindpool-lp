import React from "react";
import { Meta, Story } from "@storybook/react";
import YourOpinion from ".";

export default {
  title: "Sections/Your Opinion",
  component: YourOpinion,
} as Meta;

export const yourOpinion: Story = (args) => <YourOpinion {...args} />;
