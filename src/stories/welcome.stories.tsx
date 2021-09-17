import React from "react";
import { linkTo } from "@storybook/addon-links";
import { Welcome } from "@storybook/react/demo";

import { Meta } from "@storybook/react";

export default { title: "Welcome" } as Meta;

export const toStorybook = () => <Welcome showApp={linkTo("Button")} />;
