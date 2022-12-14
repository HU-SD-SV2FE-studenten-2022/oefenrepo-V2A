import { LitElement, css, html } from "lit";

export default class RepairHeader extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {};
  }

  render() {
    return html`
      <fieldset>
        Datum: ${new Date(Date.now()).toDateString()} Tijd: ${new Date(Date.now()).toLocaleTimeString()}
      </fieldset>
    `
  }

}

window.customElements.define('repair-header', RepairHeader);
