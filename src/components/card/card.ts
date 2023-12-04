import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import "../icon/icon";
import "../button/filled-button";

@customElement("cs-card")
export class CsCard extends LitElement {
  @property({ type: Number })
  rating: number = 0;

  @property()
  name: string = "";

  @property({ type: Number })
  price: number = 0;

  @property()
  currency: string = "";

  render() {
    return html`
      <figure>
        <div class="star">
          <cs-icon name="star"></cs-icon>
          <span>${this.rating}</span>
        </div>
        <slot></slot>
      </figure>

      <div class="title">${this.name}</div>

      <div class="price">
        <span>${this.currency}${this.price}</span>
        <cs-filled-button size="sm">
          <cs-icon name="plus"></cs-icon>
        </cs-filled-button>
      </div>
    `;
  }

  static styles = css`
    :host {
      box-sizing: border-box;
      width: 135px;
      height: 230px;
      padding: 12px;
      display: grid;
      grid-template-rows: 111px 1fr min-content;
      row-gap: 10px;

      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
    }

    figure {
      margin: 0;
    }
    figure .star {
      position: absolute;
      display: flex;
      align-items: center;
      column-gap: 5px;
      padding: 5px 7px;

      border-radius: 15px 0px 15px 0px;
      background: rgba(65, 65, 65, 0.5);
      backdrop-filter: blur(7.5px);
    }
    figure .star span {
      color: white;
    }
    figure .star cs-icon {
      height: 10px;
      width: 10px;
      color: #d3a601;
    }
    figure ::slotted(img) {
      width: 100%;
      height: 100%;
    }

    .title {
      color: #fff;
      font-family: Rosarivo;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 145%; /* 20.3px */
    }

    .price {
      display: grid;
      grid-template-columns: 1fr min-content;
      align-items: center;

      border-radius: 12px;
      background: rgba(255, 255, 255, 0.08);
    }
    .price span {
      text-align: center;

      color: #fff;
      font-family: "Open Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 115%; /* 18.4px */
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "cs-card": CsCard;
  }
}
