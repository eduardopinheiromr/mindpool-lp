import React from "react";
import { Meta, Story } from "@storybook/react";
import Selector, { SelectorProps } from ".";
import { countries } from "@components/sections/About/constants";

export default {
  title: "UI/Selector",
  component: Selector,
} as Meta;

export const selector: Story<SelectorProps> = (args) => <Selector {...args} />;

selector.args = {
  placeholder: "Select an option",
  options: countries,
};
