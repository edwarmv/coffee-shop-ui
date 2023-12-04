import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import "@material/web/ripple/ripple";

export abstract class CsButton extends LitElement {
  @property()
  href = "";

  protected override render() {
    const buttonOrLink = this.href ? this._renderLink() : this._renderButton();
    const buttonId = this.href ? "link" : "button";
    return html`
      <md-ripple for=${buttonId}></md-ripple>
      ${buttonOrLink}
    `;
  }

  private _renderButton() {
    return html`<button id="button" class="button">
      <slot></slot>
    </button>`;
  }

  private _renderLink() {
    return html`<a id="link" class="button" href=${this.href}>
      <slot></slot>
    </a>`;
  }
}
