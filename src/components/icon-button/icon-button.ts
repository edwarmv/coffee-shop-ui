import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "@material/web/ripple/ripple";

@customElement("cs-icon-button")
export class CsIconButton extends LitElement {
  protected render(): unknown {
    return html`
      <md-ripple for="button"></md-ripple>
      <button id="button">
        <slot></slot>
      </button>
    `;
  }

  static override styles = css`
    :host {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 50%;
      padding: 5px;
      box-sizing: border-box;
    }

    button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      height: 26px;
      width: 26px;
      padding-block: 0;
      padding-inline: 0;

      border: none;
      background: none;
      outline: none;
    }

    ::slotted(cs-icon) {
      height: 26px;
      width: 26px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "cs-icon-button": CsIconButton;
  }
}
