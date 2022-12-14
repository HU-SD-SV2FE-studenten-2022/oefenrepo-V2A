import { LitElement, css, html } from "lit";

export default class RepairHeader extends LitElement {
  static get styles() {
    return css``;
  }

  static get properties() {
    return {
      repairid: { type: Number }
    };
  }

  render() {
    return html`
      <fieldset>
        ID: ${this.repairid} Datum: ${new Date(Date.now()).toDateString()} Tijd: ${new Date(Date.now()).toLocaleTimeString()}
      </fieldset>
    `
  }

}

window.customElements.define('repair-header', RepairHeader);
