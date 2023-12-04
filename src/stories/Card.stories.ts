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
    rating: "4.5",
    name: "Bursting Blueberry",
    price: "249",
    currency: "₹",
  },
  render: (args) => html`
    <cs-card
      rating=${args.rating}
      name=${args.name}
      price=${args.price}
      currency=${args.currency}
    >
      <img src="/coffee.png" />
    </cs-card>
  `,
};
