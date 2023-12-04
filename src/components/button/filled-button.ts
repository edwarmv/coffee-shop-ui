import { customElement, property } from "lit/decorators.js";
import { CsButton } from "./button";
import { css } from "lit";

@customElement("cs-filled-button")
export class CsFilledButton extends CsButton {
  @property({ reflect: true })
  size: "sm" | "md" = "md";

  static override styles = css`
    :host {
      display: inline-block;
      position: relative;
      border-radius: 10px;
    }

    :host([size="sm"]) .button {
      height: 40px;
      padding: 13px;
    }

    :host([size="md"]) .button {
      height: 45px;
      padding: 15px 50px;
    }

    .button {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      flex-shrink: 0;
      box-sizing: border-box;

      border: none;
      border-radius: 10px;
      background: #efe3c8;
      box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.15);
      text-decoration: none;

      color: #4a2b29;
      text-align: center;
      font-family: "Open Sans";
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }

    ::slotted(cs-icon) {
      height: 13px;
      width: 13px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "cs-filled-button": CsFilledButton;
  }
}
