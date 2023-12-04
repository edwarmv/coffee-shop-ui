import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/card/card";
import { html } from "lit";

const meta: Meta = {
  component: "cs-card",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: "Button",
  },
  render: (args) => html` <cs-card> </cs-card> `,
};
