import React from "react";
import { Meta, Story } from "@storybook/react";
import Posts, { PostsProps } from ".";
import { postsWithLikes } from "@mocks/postsWithLikes";

export default {
  title: "Sections/Posts",
  component: Posts,
} as Meta;

export const posts: Story<PostsProps> = (args) => <Posts {...args} />;

posts.args = {
  posts: postsWithLikes,
};
