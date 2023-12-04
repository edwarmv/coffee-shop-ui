import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/icon/icon";
import { html } from "lit";

const meta: Meta = {
  component: "cs-icon",
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`<cs-icon name="home"></cs-icon>`,
};
