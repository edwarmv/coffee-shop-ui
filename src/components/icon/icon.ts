import { LitElement, css, svg } from "lit";
import { customElement, property } from "lit/decorators.js";
import SymbolDefsUrl from "../../assets/symbol-defs.svg";

@customElement("cs-icon")
export class CsIcon extends LitElement {
  @property()
  name: string = "";

  render() {
    return svg`
      <svg>
        <use href="${SymbolDefsUrl}#icon-${this.name}"></use>
      </svg>
    `;
  }

  static styles = css`
    :host {
      display: grid;
      place-content: center;
    }

    svg {
      fill: currentColor;
      height: 100%;
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "cs-icon": CsIcon;
  }
}
