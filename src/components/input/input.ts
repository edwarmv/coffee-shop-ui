import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cs-input")
export class CsInput extends LitElement {
  @property()
  placeholder = "";

  render() {
    return html`
      <slot name="prefix"></slot>
      <input placeholder="${this.placeholder}" />
    `;
  }

  static styles = css`
    :host {
      display: flex;
      padding: 10px 20px;
      align-items: center;
      gap: 20px;

      border-radius: 10px;
      background: #171017;
    }

    input {
      display: block;

      background: none;
      border: none;
      outline: none;

      color: rgba(239, 227, 200, 0.5);
      font-family: Rosarivo;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    input[placeholder] {
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    ::slotted(cs-icon[slot="prefix"]) {
      height: 20px;
      width: 20px;
      color: #efe3c8;
      opacity: 0.5;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "cs-input": CsInput;
  }
}
