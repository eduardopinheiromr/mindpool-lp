import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { ButtonProps } from ".";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    label: {
      control: { type: "text", default: "Click me" },
    },
  },
} as Meta;

export const button: Story<ButtonProps> = (args) => <Button {...args} />;

button.args = {
  label: "Click me",
};
