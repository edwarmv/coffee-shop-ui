import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/icon-button/icon-button";
import "../components/icon/icon";
import { html } from "lit";

const meta: Meta = {
  component: "cs-icon-button",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <cs-icon-button>
      <cs-icon name="plus"></cs-icon>
    </cs-icon-button>
  `,
};
