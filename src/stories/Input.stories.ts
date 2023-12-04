import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/input/input";
import "../components/icon/icon";
import { html } from "lit";

const meta: Meta = {
  component: "cs-input",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    prefixIcon: true,
    placeholder: "Browse your favourite coffee",
  },
  render: (args) => html`
    <cs-input placeholder=${args.placeholder}>
      ${args.prefixIcon &&
      html`<cs-icon slot="prefix" name="magnifier"></cs-icon>`}
    </cs-input>
  `,
};
