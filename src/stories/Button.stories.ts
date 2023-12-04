import type { Meta, StoryObj } from "@storybook/web-components";
import "../components/button/filled-button";
import "../components/icon/icon";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cs-button")
export class Button extends LitElement {
  protected render(): unknown {
    return html`<slot></slot>`;
  }
}

const meta: Meta = {
  component: "cs-button",
};

export default meta;

type Story = StoryObj;

export const FilledButton: Story = {
  args: {
    label: "Button",
  },
  render: (args) => html`
    <cs-button>
      <cs-filled-button>${args.label}</cs-filled-button>
    </cs-button>
  `,
};

export const WithIcon: Story = {
  args: {
    size: "md",
  },
  argTypes: {
    size: {
      defaultValue: "md",
      options: ["sm", "md"],
      control: "select",
    },
  },
  render: (args) => html`
    <cs-button>
      <cs-filled-button size=${args.size}>
        <cs-icon name="plus"></cs-icon>
      </cs-filled-button>
    </cs-button>
  `,
};
